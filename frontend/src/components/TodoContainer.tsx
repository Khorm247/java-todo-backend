import {TodoItem} from "./TodoItem.tsx";
import TodoCard from "./TodoCard/TodoCard.tsx";
import {useParams} from "react-router-dom";

type TodoContainerProps = {
    todos: TodoItem[]
}

export default function TodoContainer(props: Readonly<TodoContainerProps>) {

    const params = useParams()
    const status = params.status
    const todosToShow = props.todos.filter((todo: TodoItem) => todo.status.toLowerCase() === status)

    if (params.status === undefined) {
        return (
            <div>
                <main>
                    <h1>All Todos</h1>
                    <ul id="todo-list">
                        <li>
                            {props.todos.map((item) => (
                                <TodoCard todoCard={item}/>
                            ))}
                        </li>
                    </ul>
                </main>
            </div>
        )
    }

    return (
        <div>
            <main>
                <h1>{params.status}</h1>
                <ul id="todo-list">
                    {todosToShow.map((item) => (
                        <TodoCard todoCard={item}/>
                    ))}
                </ul>
            </main>
        </div>
    )
}