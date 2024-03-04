import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {TodoItem} from "./components/TodoItem.tsx";
import TodoDetails from "./components/TodoDetails/TodoDetails.tsx";
import TodoContainer from "./components/TodoContainer.tsx";

export default function App() {

    const [todoListData, setTodoListData] = useState<TodoItem[]>([]);

    useEffect(
        //WAS soll er machen?
        fetchData
        //WANN soll er es machen?
        ,[])

    function fetchData(){
        axios.get('/api/todo')
            .then((response) => setTodoListData(response.data))
            .catch((error) => console.log(error.message))
    }

    console.log("fetchData\n" + todoListData)

    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<TodoContainer todos={todoListData}/>}/>
                <Route path="/:status" element={<TodoContainer todos={todoListData}/>}/>
                <Route path="/:id/update" element={<TodoDetails todo={todoListData}/>}/>
            </Routes>

            <Footer/>
        </>
    )
}
