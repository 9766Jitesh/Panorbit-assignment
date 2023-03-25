import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ContestProvider from './contextApi/contextApi';
import { RouterProvider, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <div className="App">
        <ContestProvider>
          <Routes>

            <Route path="/homepage" element={<HomePage />} />
            <Route path="/homepage/:id" element={<HomePage />} />
          </Routes>
        </ContestProvider>
      </div>
    );
  }

export default App;
