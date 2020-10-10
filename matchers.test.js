// toBe 相当于 ===
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
  // const a = {
  //   name: 'decade'
  // }
  // expect(a).toBe({name: 'decade'}); // 使用toBe来比较对象 会失败
});
/**
 * ● two plus two is four
 * expect(received).toBe(expected) // Object.is equality
 * If it should pass with deep equality,
 * replace "toBe" with "toStrictEqual"
 * Expected: {"name": "decade"}
 * Received: serializes to the same string
 *
 */

// toEqual
test('object a ', () => {
  const a = {
    name: 'decade'
  };
  expect(a).toEqual({ name: 'decade' }); // 这样就能通过了
});

// .not 匹配相反的结果

test('not', () => {
  // expect(5).not.toBe(5);
  expect(5).not.toBe(6);
});
/**
 *
 * expect(received).not.toBe(expected) // Object.is equality
 * Expected: not 5
 */

// .toBeNull
test('null', () => {
  expect(null).toBeNull();
  // expect(0).toBeNull();
  // expect(undefined).toBeNull();
  // expect(false).toBeNull();
});

// .toBeUndefined
test('undefined ', () => {
  expect(undefined).toBeUndefined();
  // expect(null).toBeUndefined();
  // expect(0).toBeUndefined();
  // expect(false).toBeUndefined();
});

// .toBeDefined
test('toBeDefined ', () => {
  // expect(undefined).toBeDefined(); 希望得到的值不是undefined
  expect(null).toBeDefined();
  expect(0).toBeDefined();
  expect(false).toBeDefined();
});

// .toBeTruthy 期望预期的值能使if为真
test('toBeTruthy', () => {
  // expect(undefined).toBeTruthy();
  // expect(null).toBeTruthy();
  // expect(0).toBeTruthy();
  // expect(false).toBeTruthy();
  // expect().toBeTruthy(); 这样的相当于undefined
  expect([]).toBeTruthy();
  expect({}).toBeTruthy();
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
});

// .toBeFalsy 使if为false的
test('toBeFalsy', () => {
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect().toBeFalsy();
  // expect([]).toBeFalsy();
  // expect({}).toBeFalsy();
  // expect(1).toBeFalsy();
  // expect(true).toBeFalsy();
});

// toBeGreaterThan
test('toBeGreaterThan', () => {
  expect(5).toBeGreaterThan(4);
});

// toBeGreaterThanOrEqual
test('toBeGreaterThanOrEqual', () => {
  expect(5).toBeGreaterThanOrEqual(5);
});

// toBeLessThan
test('toBeLessThan', () => {
  expect(5).toBeLessThan(6);
});

// toBeLessThanOrEqual
test('toBeLessThanOrEqual', () => {
  expect(5).toBeLessThanOrEqual(5);
});

// toBeCloseTo 浮点数比较
test('toBeCloseTo', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
  // expect(1).toBeCloseTo(1.1); // Expected difference: < 0.005
  expect(1).toBeCloseTo(1.00001);
});

// toMatch 字符串匹配
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

// toContain
const direction = ['up', 'down', 'left', 'right'];

test('the direction has up on it', () => {
  expect(direction).toContain('up');
  expect(new Set(direction)).toContain('up');
});

// toThrow
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/); // 匹配 报错中是否有JDK
});
