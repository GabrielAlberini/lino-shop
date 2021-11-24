import logo from './logo.svg';
import './App.css';
import { color } from '@mui/system';
import NavBar from './components/NavBar/NavBar.js'
import ListItems from './components/ListItems/ListItems';

function App() {

  return (
    <div className="App">
     <NavBar />
     <ListItems />
    </div>
  );
}

export default App;
