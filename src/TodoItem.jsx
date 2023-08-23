export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return <li>
        <label>
            <input checked={completed} type="checkbox"
                   onChange={e => toggleTodo(id, e.target.checked)}/>
            {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
}