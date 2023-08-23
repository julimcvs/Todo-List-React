import {TodoItem} from "./TodoItem.jsx";

export function TodoList({todos, deleteTodo, toggleTodo}) {
    return <>
        <h1 className="header">Todo List</h1>
        {todos.length === 0 && "Start adding todos!"}
        <ul className="list">
            {todos.map(todo => {
                return <TodoItem
                    {...todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    key={todo.id}
                />
            })}
        </ul>
    </>
}