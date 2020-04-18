import React, { Component, Props } from "react"
import ReactDOM from "react-dom"
// import { observer } from "mobx-react"
import TodoList from './todoList';

// @observer
class TodoListView extends Component<Props> {
    // constructor(todoList: any) {
    //     super(todoList);

    // }
    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.todos.map((todo:any) => (
                        <TodoView todo={todo} key={todo.id} />
                    ))}
                </ul>
                Tasks left: {this.props.todoList.unfinishedTodoCount}
            </div>
        )
    }
}

const TodoView = ( todo: any ) => (
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => (todo.finished = !todo.finished)}
        />
        {todo.title}
    </li>
)

const store = new TodoList();
ReactDOM.render(<TodoListView todoList ={store} />, document.getElementById("mount"));
