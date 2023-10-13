import "./css/App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="flex-container">
      <div className="flex-column">
        <div className="item item-1"><p className="text">jordan</p></div>
        <div className="item item-2">
          <h3 className="text">jordantheisen08@gmail.com</h3>
        </div>
      </div>
      {/* <NavBar/>
        <main>
          <AboutMe/>
        </main> */}
    </div>
  );
}

export default App;
