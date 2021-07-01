import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyApp />
      </header>
    </div>
  );
}

function MyApp() {
  return (
    <div className="MyApp">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
