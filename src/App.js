import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Click from './components/Click/Click';
import Item from './components/Item/Item';
import { Home, About, Cart, Login, Contact, Products } from './screens'
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className="App">
     <Home />
     {/* <About />
     <Cart />
     <Login />
     <Contact />
     <Products /> */}
    </div>
  );
}

export default App;
