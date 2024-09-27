import logo from './logo.svg';
import './App.css';
import Apalah from './components/main';
import Fufufafa from './components/fufufafa';
import Sukunstress from './components/Sukunstress'
import Follow from './components/follow'

function App() {
  return (
    <div className="App">
      <Apalah/>
      <Fufufafa/>
      <Sukunstress name="Fiko"/>
      <Sukunstress name="Hilmi"/>
      <Sukunstress name="Putra"/>
      <Follow/>
    </div>
  );
}

export default App;