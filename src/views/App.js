import logo from 'assets/logo.svg'; // używamy zapisu bez kropek, czyli importy absolutne, które mamy dzięki create-react-app, a konfiguracja znajduje się w pliku jsconfig.json
import './App.css'; // tutaj sobie zostawiamy, bo jestw tym samym folderze

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
