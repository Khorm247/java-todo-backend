import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";

type ApiResponse = {
    id: string,
    description: string,
    status: string
}

export default function App() {

    const [exampleData, setExampleData] = useState<ApiResponse[]>([]);

    useEffect(
        //WAS soll er machen?
        fetchData
        //WANN soll er es machen?
        ,[])

    function fetchData(){
        //axios ermöglicht alle gängigen http-requests (get, post, put, delete)
        axios.get('/api/todo')
            //Axios erhält eine Response, welche wir gezielt auslesen können
            //relevante Daten befinden sich für uns unter data, weshalb wir diesen Inhalt in unserem Setter wollen!
            .then((response) => setExampleData(response.data))
            //Sollte ein Fehler, z. B. Exception im Backend stattfinden, wird diese abgefangen und ausgegeben
            .catch((error) => console.log(error.message))
    }

      return (
          <>
              <Header/>
              <Routes>
                  <Route path="/" element={<h1>Alle</h1>}/>
                  <Route path="/open" element={<h1>Offen</h1>}/>
                  <Route path="/done" element={<h1>Erledigt</h1>}/>
              </Routes>

              <main>
                  <form id="todo-form">
                      <input type="text" id="todo-input" placeholder="Neue Aufgabe hinzufügen"/>
                      <button type="submit">Hinzufügen</button>
                  </form>
                  
                  <ul id="todo-list">
                      <ul>
                          {exampleData.map((item) => (
                              <li key={item.id}>
                                  {item.id}
                                  <b>{item.description}</b>
                                    {item.status}
                              </li>
                          ))}
                      </ul>
                  </ul>
              </main>

              <Footer/>
          </>
      )
}
