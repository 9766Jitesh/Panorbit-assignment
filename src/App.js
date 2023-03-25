import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ContestProvider from './contextApi/contextApi';

function App() {
  return (
    <div className="App">
      <ContestProvider>

      <HomePage></HomePage>
      </ContestProvider>
    </div>
  );
}

export default App;
