const allure = codeceptjs.container.plugins('allure');

const OWNER = "allure-framework";
const REPO = "allure2";
const ISSUE_TITLE = "Some issue title here";

Feature('Open And Close Issues');

Scenario("Creating new issue authorized user", ({I}) => {
  allure.addLabel("Microservice", "Billing");
  allure.addLabel("owner", "eroshenkoam");
  I.openIssuesPage(OWNER, REPO);
  I.createIssueWithTitle(ISSUE_TITLE);
  I.shouldSeeIssueWithTitle(ISSUE_TITLE);
});

Scenario("Adding note to advertisement", ({I}) => {
  allure.addLabel("Microservice", "Repository");
  allure.addLabel("owner", "eroshenkoam");
  I.openIssuesPage(OWNER, REPO);
  I.createIssueWithTitle(ISSUE_TITLE);
  I.shouldSeeIssueWithTitle(ISSUE_TITLE);
});

Scenario("Closing new issue for authorized user", ({I}) => {
  allure.addLabel("Microservice", "Repository");
  allure.addLabel("owner", "eroshenkoam");
  I.openIssuesPage(OWNER, REPO);
  I.createIssueWithTitle(ISSUE_TITLE);
  I.closeIssueWithTitle(ISSUE_TITLE);
  I.shouldSeeIssueWithTitle(ISSUE_TITLE);
});
