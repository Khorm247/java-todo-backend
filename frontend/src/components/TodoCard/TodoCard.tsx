import { Link } from "react-router-dom";
import {TodoItem} from "../TodoItem.tsx";
import "./TodoCard.css";

type TodoCardProps = {
    todoCard: TodoItem
}

export default function TodoCard(props: Readonly<TodoCardProps>) {

    return (
        <>
            <Link to={`/characters/${props.todoCard.id}`}>
                <div className={"card"}>
                    <h3>{props.todoCard.description}</h3>
                    <hr/>
                    <h3>{props.todoCard.status}</h3>
                </div>
            </Link>
        </>
    )
}