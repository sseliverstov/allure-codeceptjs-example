import * as assert from "assert";

class Dummy extends Helper {
  public async passedStep() {}
  public async failedStep() {
    assert.ok(false);
  }
}

export = Dummy;
