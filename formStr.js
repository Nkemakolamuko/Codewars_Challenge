function apparently(string) {
  let conStr = string.split(" ");
  let formStr = "";
  for (let i = 0; i < conStr.length; i++) {
    formStr += " " + conStr[i];
    if (conStr[i] == "and" || conStr[i] == "but") {
      if (conStr[i] == "and") {
        formStr += " " + "apparently";
      }
    }
  }
  return formStr.trim();
}
