import { Stock } from "./subject/Stock";
import { Investor } from "./observer/Investor";

const stock = new Stock();

const investor1 = new Investor("Investor 1");
const investor2 = new Investor("Investor 2");

stock.attach(investor1);
stock.attach(investor2);

stock.setPrice(100);
stock.setPrice(200);
