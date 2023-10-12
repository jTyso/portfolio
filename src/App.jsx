import './css/App.css';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      <NavBar/>
        <main>
          <AboutMe/>
        </main>
    </div>
  );
}

export default App;
