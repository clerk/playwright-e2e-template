/**
 * A useful utility to create a custom test identifier for each test run.
 * This identifier could be used to prefix fixtures or for additional logging.
 *
 * Use this to get a value based on the current test run. Useful for debugging/tracing specific flow regressions.
 */
export function createTestIdentifier(
  expect: jest.Expect,
  browserName: string
): string {
  return (
    expect.getState().currentTestName.replace(/\s+/g, "-").toLowerCase() +
    "-" +
    browserName +
    "-" +
    Date.now()
  );
}
