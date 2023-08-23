import "./styles.css"
import {useEffect, useState} from "react";
import {NewTodoForm} from "./NewTodoForm.jsx";
import {TodoList} from "./TodoList.jsx";

function App() {
    const [todos, setTodos] = useState(() => {
        const localTodos = localStorage.getItem('TODOS');
        if (localTodos == null) return []
        return JSON.parse(localTodos);
    })

    useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify(todos))
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => {
            return [...currentTodos, {
                id: crypto.randomUUID(), title, completed: false
            }]
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        })
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    return <>
        <NewTodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
}

export default App
