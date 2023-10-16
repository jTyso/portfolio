import "./css/App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">JT</div>
        <ul class="nav-links">
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>5
          </li>
        </ul>
      </nav>

      <div className="main-container">
        <h3>Business and Technology Enchanter</h3>
        <h1>JORDAN THEISEN</h1>
      </div>
      <div classname="sully">
        <img src="./images/wallapaper.png" alt="" />
      </div>
    </div>
  );
}

export default App;
