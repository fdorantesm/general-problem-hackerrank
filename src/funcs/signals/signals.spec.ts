import { signalUpdateTimes } from "./signals";

describe("Signals", () => {
  it("pass if returns 1 updates when signals are [1,2,3,4,5] and [5,4,3,2,1]", () => {
    const updates = signalUpdateTimes([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
    expect(updates).toBe(1);
  });

  it("fails if returns 1 when updates are [1,2,3,4,5] and [1,2,3,4,5]", () => {
    const updates = signalUpdateTimes([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    expect(updates === 1).toBeFalsy();
    expect(updates).toBe(5);
  });
});
