import clearList from './clearList.js';

describe('Todo List', () => {
  test('Remove all completed tasks function testing', () => {
    const listArr = [
      { value: 'Login page design task', completed: true, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ];
    expect(clearList(listArr)).toEqual([
      { value: 'Login page1 design task', completed: false, index: 0 },
    ]);
  });
});
