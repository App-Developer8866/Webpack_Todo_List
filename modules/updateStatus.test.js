import updateStatus from './updateStatus.js';

describe('Todo List', () => {
  test('update task status function testing', () => {
    const listArr = [
      { value: 'Login page design task', completed: false, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ];
    expect(updateStatus(0, true, listArr)).toEqual([
      { value: 'Login page design task', completed: true, index: 0 },
      { value: 'Login page1 design task', completed: false, index: 1 },
    ]);
  });
});