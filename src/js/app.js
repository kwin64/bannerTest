import * as flsFunctions from "./modules/functions.js";
import zh from "../store/zh.json";
import loadLang from "./modules/loadLang.js";

let language = window.navigator ? window.navigator.language : "ru";
language = language.slice(0, 2).toLowerCase();

const data = loadLang(language);
console.log(data);

flsFunctions.dataParseBody(zh);
flsFunctions.dataParseHeader(zh);
flsFunctions.dataParseFooter(zh);
