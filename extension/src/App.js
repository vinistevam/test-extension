import './App.css';
import { providerOld, providerNew, signPersonal } from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">
        {/* DEPRECATED */}
        {/* <div>
          <p>Using metamask-extension-provider</p>

          <button onClick={providerOld}>
            Connect to MM and Sign
          </button>
        </div> */}

        <div>
          <p>Using @metamask/providers</p>

          <button onClick={providerNew}>
            Connect to MM
          </button>

          <button onClick={signPersonal}>
            Request to sign
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;