import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

// TodoList.propTypes = {
//   todos: Proptypes.arrayOf(
//     Proptypes.shape({
//       id: Proptypes.number.isRequired,
//       completed: Proptypes.bool.isRequired,
//       text: Proptypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: Proptypes.func.isRequired
// };

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
