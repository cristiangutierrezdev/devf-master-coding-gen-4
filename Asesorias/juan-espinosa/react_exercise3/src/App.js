import React from "react"
import Card from "./Card"
import img1 from "./img/mexico.jpg"
import img2 from "./img/portugal.jpg"
import img3 from "./img/italy.jpg"
import "./AppStyles.css"

function App() {
  return (
    <main className="App">
      <div className="AppCards">
        <Card title="Mexico" id="Mexico" img={img1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in vehicula ex. Vestibulum eu mauris et arcu ultricies rhoncus. Fusce in volutpat ligula. Curabitur maximus euismod risus, pellentesque euismod velit. Maecenas et suscipit enim. "/>
        <Card title="Portugal" id="Portugal" img={img2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in vehicula ex. Vestibulum eu mauris et arcu ultricies rhoncus. Fusce in volutpat ligula. Curabitur maximus euismod risus, pellentesque euismod velit. Maecenas et suscipit enim."/>
        <Card title="Italy" id="Italy" img={img3} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in vehicula ex. Vestibulum eu mauris et arcu ultricies rhoncus. Fusce in volutpat ligula. Curabitur maximus euismod risus, pellentesque euismod velit. Maecenas et suscipit enim."/>
      </div>
    </main>
  );
}

export default App;
