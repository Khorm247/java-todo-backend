import {TodoItem} from "../TodoItem.tsx";
import {useParams} from "react-router-dom";

type TodoDetailsProps = {
    todo: TodoItem[]

}
export default function TodoDetails(props: Readonly<TodoDetailsProps>) {

    const params = useParams();
    const todoItem: TodoItem = props.todo.filter((todoItem: TodoItem) => todoItem.id === params.id)[0];

  return <>
      {
            todoItem ? (
                <div>
                    <h2>{todoItem.id}</h2>
                    <h2>{todoItem.description}</h2>
                    <h2>{todoItem.status}</h2>
                </div>
            ) : (
                <div>
                    <h2>Todo not found</h2>
                </div>
            )
      }
  </>

}