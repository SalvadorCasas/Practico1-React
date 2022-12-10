import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

/*CODIGO JSX*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Welcome></Welcome>
        </div>
      </header>
    </div>
  );
}

export default App;
