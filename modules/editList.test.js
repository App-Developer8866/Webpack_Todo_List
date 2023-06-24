import editList from './editList.js';

describe('Todo List', () => {
  test('Edit item function testing', () => {
    const listArr = [
      { value: 'Login page design task', completed: false, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ];
    expect(editList(0, 'Login page0', listArr)).toEqual([
      { value: 'Login page0', completed: false, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ]);
  });
});