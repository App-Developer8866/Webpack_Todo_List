import addToList from './addToList.js';

describe('Todo List', () => {
  test('Add task function testing', () => {
    expect(addToList('Login page design task', false, 0, [])).toEqual([{ value: 'Login page design task', completed: false, index: 0 }]);
  });
});