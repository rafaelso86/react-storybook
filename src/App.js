//import './index.css';
import './index.scss';

import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Ola mundo</h1>
      <div className="rem">Está em REM</div>
      <div className="pix">Está em PIX</div>
      <Button label="Default" />
    </div>
  );
}

export default App;
