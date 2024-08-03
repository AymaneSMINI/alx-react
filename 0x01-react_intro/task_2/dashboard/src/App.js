import './App.css';
import logo from './holberton_logo.jpg'; 
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr className="divider"></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr className="divider"></hr>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;