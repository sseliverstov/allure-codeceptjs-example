const allure: any = codeceptjs.container.plugins('allure');

Feature('Codeceptjs Allure Example');

Scenario('Passed test with labels', ({I}) => {
  allure.feature("Feature example");
  allure.addLabel("owner", "eroshenkoam");
  I.passedStep();
});
