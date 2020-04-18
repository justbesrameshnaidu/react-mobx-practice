// import { observable, computed } from "mobx"

export default class TodoList {
    // todos = new Array();
    todos:any;
    get unfinishedTodoCount() {
        return this.todos.filter((todo:any) => !todo.finished).length
    }
}
