const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  })

  test('todolist copies an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })

  test('get first item on the list', () => {
    expect(list.first()).toEqual(todo1);
  })

  test('get first item on the list', () => {
    expect(list.last()).toEqual(todo3);
  })

  test('shift removes and returns first item in the list', () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  })

  test('pop removes and returns last item in the list', () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  })

  test('isDone() returns true if all items in the list are done', () => {
    expect(list.isDone()).toBe(false);
  })

  test('TypeError occurs when attempting to add a non-Todo item', () => {
    expect(() => list.add('todo')).toThrow(TypeError);
  })

  test('itemAt returns the item at given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });

  test('markDoneAt marks todo at given index done', () => {
    expect(() => list.markDoneAt(6)).toThrow(ReferenceError);
  
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  });

  test('markUndoneAt marks todo at given index undone', () => {
    expect(() => list.markUndoneAt(6)).toThrow(ReferenceError);
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
  
    list.markUndoneAt(1);
  
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
  });

  test('markAllDone marks all todos in list done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes todo at given index', () => {
    expect(() => list.removeAt(6)).toThrow(ReferenceError);
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list (when marked done)', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    list.markDoneAt(1);

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list (when all done)', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();

    expect(list.toString()).toBe(string);
  });
  
  test('forEach iterates over all todos', () => {
    let result = [];
    list.forEach(todo => result.push(todo));
  
    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
  
    expect(newList.title).toBe(list.title);
  
    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});