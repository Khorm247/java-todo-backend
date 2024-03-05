import './App.css'
import axios from "axios";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {TodoItem} from "./components/TodoItem.tsx";
import TodoDetails from "./components/TodoDetails/TodoDetails.tsx";
import TodoContainer from "./components/TodoContainer.tsx";
import {useEffect, useState} from "react";

export default function App() {

    const [todoListData, setTodoListData] = useState<TodoItem[]>([]);

    useEffect(
        fetchData
        ,[])

    function fetchData(){
        axios.get('/api/todo')
            .then((response) => setTodoListData(response.data))
            .catch((error) => console.log(error.message))
    }

    function handleTodoSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const todoInput = document.getElementById("todo-input") as HTMLInputElement;
        const todoDescription = todoInput.value;

        if (todoDescription) {
            console.log(todoListData)
            axios.post('/api/todo', {
                id: null,
                description: todoDescription,
                status: "OPEN"
            })
                .then((response) => {
                    setTodoListData([...todoListData, response.data])
                    todoInput.value = "";
                })
                .catch((error) => console.log(error.message))
            console.log(todoListData)
        }
    }

    return (
        <>
            <Header/>
            <div className={"form-container"}>
                <form id="todo-form">
                    <input type="text" id="todo-input" placeholder="Neue Aufgabe hinzufügen"/>
                    <button onClick={(event) => handleTodoSubmit(event)}>Hinzufügen</button>
                </form>
            </div>

            <Routes>
                <Route path="/" element={<TodoContainer todos={todoListData}/>}/>
                <Route path="/:status" element={<TodoContainer todos={todoListData}/>}/>
                <Route path="/:id/update" element={<TodoDetails todo={todoListData}/>}/>
            </Routes>

            <Footer/>
        </>
    )
}
