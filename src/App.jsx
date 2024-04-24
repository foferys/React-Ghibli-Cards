
import './App.css';
import Navbar from './components/Navbar';
import CardForm from './components/CardForm';
import Contatore from './components/Contatore';
import Cards from './pages/Cards';


function App() {
  return (
    <>
      <Navbar></Navbar> 
      <Contatore></Contatore>
      <CardForm></CardForm>
      <Cards></Cards>
    </>
  );
}

export default App
