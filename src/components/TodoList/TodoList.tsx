import classNames from 'classnames';
import { useState } from 'react';
import { Todo } from '../../types/Todo';
import TodoItems from '../TodoItems';

type Props = {
  todos: Todo[],
  toggleCompleteStatus: (todoId: number) => void,
  deleteHandler: (todoId: number) => void,
  editTitle: (todoId: number, newTitle: string) => void,
};

const TodoList: React.FC<Props> = ({
  todos,
  toggleCompleteStatus,
  deleteHandler,
  editTitle,
}) => {
  const [itemEdited, setItemEdited] = useState(-1);

  return (
    <ul className="todo-list" data-cy="todosList">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames({
            completed: todo.completed,
            editing: itemEdited === todo.id,
          })}
        >
          <TodoItems
            todo={todo}
            toggleCompleteStatus={toggleCompleteStatus}
            deleteHandler={deleteHandler}
            editTitle={editTitle}
            onEditing={setItemEdited}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;