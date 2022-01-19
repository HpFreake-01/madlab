import './App.css';
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Principles from "../principles/Principles";
import Services from "../services/Services";
import Calculator from "../calculator/Calculator";
import Footer from "../footer/Footer";


const App = () =>{
  return (
      <div>
          <Header/>
          <Projects/>
          <Principles/>
          <Services/>
          <Calculator/>
          <Footer/>
          <div class="app">
            <p>old commit</p>
          </div>
      </div>
  );
}

export default App;
