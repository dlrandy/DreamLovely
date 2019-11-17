const path = require("path");
function getEntryJsHtmlPrj() {
  const argsLen = process.argv.length;
  const prjName = process.argv[argsLen - 3]; // WEBPACK-CLI concerns
  const entryJsPath = process.argv[argsLen - 2];
  const htmlTemplatePath = process.argv[argsLen - 1];
  return [entryJsPath, htmlTemplatePath, prjName];
}


module.exports = { getEntryJsHtmlPrj };
