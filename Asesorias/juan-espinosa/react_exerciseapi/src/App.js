import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect} from "react"
import Card from "./Card"
function App() {
  const [names,setNames] = useState([]);

  const showNames = () => {
    const newName = names.map((owner) => {
      return (
        <Card
        name={owner.author}
        img={owner.download_url}
        key={owner.id}
        />
      );
    })

    return newName;
  };


  useEffect(() => {
    const getNames = () => {
      fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setNames(data))
      .catch((err) => console.log(err));
    };

    getNames()
  }, [])
  
  

  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/images">
            {showNames()}
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
