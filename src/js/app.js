import * as flsFunctions from "./modules/html.js";
import loadLang from "./modules/loadLang.js";

let systemLanguage = window.navigator.language;
systemLanguage = systemLanguage.slice(0, 2).toLowerCase();

const query = window.location.search.slice(1);
let queryParams = new URLSearchParams(query);

let lang = "en";
let langs = ["en", "es", "fr", "ja", "nl", "ru", "zh"];

if (queryParams.has("lang")) {
  lang = queryParams.get("lang");
} else {
  lang = systemLanguage;
  queryParams.set("lang", lang);
  history.pushState(
    null,
    "",
    `${window.location.pathname}?${queryParams.toString()}`
  );
}
document.documentElement.setAttribute("lang", lang);

if (!langs.includes(lang)) {
  lang = "en";
}

loadLang(lang).then((data) => {
  flsFunctions.dataParseBody(data);
  flsFunctions.dataParseHeader(data);
  flsFunctions.dataParseFooter(data);
});
