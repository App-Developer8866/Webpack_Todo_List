import removeListitem from './removeListitem.js';

describe('Todo List', () => {
  test('Remove single task function testing', () => {
    const listArr = [
      { value: 'Login page design task', completed: false, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ];
    expect(removeListitem(0, listArr)).toEqual([{ value: 'Login page1 design task', completed: false, index: 0 }]);
  });
});