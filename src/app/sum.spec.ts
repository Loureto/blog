const sum = (a: number, b: number) => a + b;

describe('sum', () => {
  it('should returns a soma a + b', () => {
    const result = sum(1, 1);

    expect(result).toEqual(2);
  });
});
