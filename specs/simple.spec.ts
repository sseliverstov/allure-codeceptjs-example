Feature('Codeceptjs Example');

Scenario('simple passed test', ({I}) => {
  I.passedStep();
});

Scenario('simple failed test', ({I}) => {
  I.passedStep();
  I.failedStep();
});
