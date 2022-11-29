import Image from './Image';
import cat from './cat.jpg';
import './App.css';

function App() {
  return (
    <Image source= {cat} alternativeText = 'Cute cat staring'/>
  );
}

export default App;
