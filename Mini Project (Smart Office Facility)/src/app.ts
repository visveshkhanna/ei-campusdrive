import * as readline from "readline";
import { CommandParser } from "./utils/CommandParser";
import { OfficeConfiguration } from "./models/OfficeConfiguration";
import { ACController } from "./observers/ACController";
import { LightController } from "./observers/LightController";
import { UserSession } from "./models/UserSession";

const officeConfig = OfficeConfiguration.getInstance();
const userSession = UserSession.getInstance();
const parser = new CommandParser(officeConfig, userSession);

officeConfig.addObserver(new ACController());
officeConfig.addObserver(new LightController());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Office Meeting Room Management System");

rl.on("line", (input) => {
  const [action, login] = input.split(" ");
  if (action === "Login") {
    if (userSession.getRole() !== "") {
      console.log("You are already logged in.");
      return;
    }
    officeConfig.updateStatistics(
      `User ${userSession.getRole()} has logged in successfully.`
    );
    userSession.setRole(login);
    console.log("User authenticated successfully.");
    return;
  }
  if (userSession.getRole() === "") {
    console.log("Please login first.");
    return;
  }
  const output = parser.parse(input);
  console.log(output);
});
