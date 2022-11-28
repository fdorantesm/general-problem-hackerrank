import { getTotalEfficiency } from "./efficiency";

describe("Efficiency", () => {
  it("pass if returns 10 using [3,1,3,1]", () => {
    const totalEfficiency = getTotalEfficiency([3, 1, 3, 1]);
    expect(totalEfficiency).toBe(10);
  });

  it("fails if returns 0 using [2,3,1,2]", () => {
    const totalEfficiency = getTotalEfficiency([2, 3, 1, 2]);
    expect(totalEfficiency === 0).toBeFalsy();
    expect(totalEfficiency).toBe(8);
  });
});
