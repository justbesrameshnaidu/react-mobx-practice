// import React from 'react';
// import { observable } from 'mobx';
// import * as mobx from 'mobx';
// import { observer } from "mobx-react"
// @observer
// class TodoList extends React.Component {
//   render() {
//     const store = this.props.store;
//     return (
//       <div>
//         { store.report }
//         <ul>
//         { store.todos.map(
//           (todo: any, idx: any) => <TodoView todo={ todo } key={ idx } />
//         ) }
//         </ul>
//         { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
//         <button onClick={ this.onNewTodo }>New Todo</button>
//         <small> (double-click a todo to edit)</small>
//         <RenderCounter />
//       </div>
//     );
//   }

//   onNewTodo = () => {
//     this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
//   }
// }

// @observer
// class TodoView extends React.Component {
//   render() {
//     const todo = this.props.todo;
//     return (
//       <li onDoubleClick={ this.onRename }>
//         <input
//           type='checkbox'
//           checked={ todo.completed }
//           onChange={ this.onToggleCompleted }
//         />
//         { todo.task }
//         { todo.assignee
//           ? <small>{ todo.assignee.name }</small>
//           : null
//         }
//         <RenderCounter />
//       </li>
//     );
//   }

//   onToggleCompleted = () => {
//     const todo = this.props.todo;
//     todo.completed = !todo.completed;
//   }

//   onRename = () => {
//     const todo = this.props.todo;
//     todo.task = prompt('Task name', todo.task) || todo.task;
//   }
// }

// ReactDOM.render(
//   <TodoList store={ observableTodoStore } />,
//   document.getElementById('reactjs-app')
// );
                        