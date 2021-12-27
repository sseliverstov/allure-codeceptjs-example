const Helper = require("@codeceptjs/helper")
const assert = require('assert');


class Steps extends Helper {

  async openIssuesPage(OWNER, REPO) {};
  async createIssueWithTitle(ISSUE_TITLE) {};
  async shouldSeeIssueWithTitle(ISSUE_TITLE) {
    assert.ok(Math.random() < 0.7, `Issue "${ISSUE_TITLE}" not found`)
  };
  async closeIssueWithTitle(ISSUE_TITLE) {};
  async openIssueWithTitle(ISSUE_TITLE) {};
  async setIssueAssignee(USER) {};
  async shouldSeeIssueAssignee(USER) {
    assert.ok(Math.random() < 0.8, `Assignee "${USER}" not found`)
  }
}

module.exports = Steps;
