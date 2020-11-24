import * as assert from "assert";

class Steps extends Helper {
  public async openIssuesPage(OWNER, REPO) {};
  public async createIssueWithTitle(ISSUE_TITLE) {};
  public async shouldSeeIssueWithTitle(ISSUE_TITLE) {
    assert.ok(Math.random() < 0.7, `Issue "${ISSUE_TITLE}" not found`)
  };
  public async closeIssueWithTitle(ISSUE_TITLE) {};
  public async openIssueWithTitle(ISSUE_TITLE) {};
  public async setIssueAssignee(USER) {};
  public async shouldSeeIssueAssignee(USER) {
    assert.ok(Math.random() < 0.8, `Assignee "${USER}" not found`)
  }
}

export = Steps;
