test("test_one", () => {
    const var1 = 1;
    expect(var1).toBe(1);
});
test("test_two", () => {
    const var2 = process.env.var2;
    expect(Number.parseInt(var2)).toBe(2);
});
test("test_three", () => {
    const var3 = process.env.var3;
    expect(Number.parseInt(var3)).toBe(3);
});