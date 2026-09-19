  const jsonLogic = require("json-logic-js");
  const rules = require("./rules.json");
  const packageData = require("./package-data.json");


  for (const rule of rules) {
    if (
    rule.id === "Demo-005" &&
    typeof packageData.declarations?.taxInclusive !== "boolean"
  ) {
    console.log(`MANUAL VERIFICATION REQUIRED: ${rule.name}`);
    console.log("Confirm whether tax-inclusive wording is present.");
    continue;
  }
    const passed = jsonLogic.apply(rule.logic, packageData);

    if (passed) {
      console.log(`PASS: ${rule.name}`);
    } else {
      console.log(`FAIL: ${rule.name}`);
      console.log(rule.failureMessage);
    }
  }