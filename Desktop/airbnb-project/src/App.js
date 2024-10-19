import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Main from "./components/main"
import Card from "./components/card"


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Card img= 'card1.jpg'
            rating ="5.0"
            reviewCount ="6"
            country = "India"
            title = "Life Lessons with SRK"
            price = "136"
/>
    </div>
  );
}

export default App;
