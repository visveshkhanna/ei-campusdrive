import * as readline from "readline";
import { CommandParser } from "./utils/CommandParser";
import { OfficeConfiguration } from "./models/OfficeConfiguration";
import { ACController } from "./observers/ACController";
import { LightController } from "./observers/LightController";

const officeConfig = OfficeConfiguration.getInstance();
officeConfig.addObserver(new ACController());
officeConfig.addObserver(new LightController());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Office Meeting Room Management System");

rl.on("line", (input) => {
  const output = CommandParser.parse(input);
  console.log(output);
});
