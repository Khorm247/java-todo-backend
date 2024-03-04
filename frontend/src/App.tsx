import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

type ApiResponse = {
    id: string,
    description: string,
    status: string
}

export default function App() {

    const [id, setId] = useState<number>(1)

    const [exampleData, setExampleData] = useState<ApiResponse[]>([]);

    useEffect(
        //WAS soll er machen?
        fetchData
        //WANN soll er es machen?
        ,[id])

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
              <h1>App</h1>
              <button onClick={() => setId(id + 1)}>Click me</button>
              <p></p>

              <ul>
                  {exampleData.map((item) => (
                      <li key={item.id}>
                          <p>{item.id}</p>
                          <p>{item.description}</p>
                            <p>{item.status}</p>
                      </li>
                  ))}
              </ul>
          </>
      )
}
