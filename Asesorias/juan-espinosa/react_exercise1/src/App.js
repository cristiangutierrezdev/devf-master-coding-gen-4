import Component from "./newComponent"
import "./component_styles.css"

function App() {
  const userName= " Juan Perez"
  const userEmail= "support@mail.com";

  return (
    <main>
      <Component 
        name= {userName} 
        gender=" hombre" 
        born=" Mexico"
        house=" Reforma 123"
        desc=" 120 m2"
        email={userEmail}
      />
      <button type="text">send</button>
      <div>Thanks for signing in, {userName}, you will be receiving our newsletter to {userEmail} </div>
    </main>
  );
}

export default App;

