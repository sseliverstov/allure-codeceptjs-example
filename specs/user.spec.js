const allure = codeceptjs.container.plugins('allure');
const OWNER = "allure-framework";
const REPO = "allure2";

Feature('Set Issue Owner');

const params = new DataTable(["name"]);
params.add(["eroshenkoam"]);
params.add(["baevdm"]);

Data(params).Scenario('Parametrized test with labels', ({I, current}) => {
  allure.addLabel("Microservice", "Authentication");
  allure.addLabel("owner", "eroshenkoam");
  I.openIssuesPage(OWNER, REPO);
  I.setIssueAssignee(current.name);
  I.shouldSeeIssueAssignee(current.name);
});
