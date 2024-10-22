import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Main from "./components/main"
import Card from "./components/card"
import Data from "./components/data"

function App() {
  const dataelements=Data.map((data)=>
  <Card data={data}/>
  )
  return (
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">
                {dataelements}
            </section>
    </div>
  );
}

export default App;
