import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ContestProvider from './contextApi/contextApi';
import { RouterProvider, Routes, Route } from 'react-router-dom';
import ProfileDashboard from './components/ProfileDashboard';

  function App() {
    return (
      <div className="App">
        <ContestProvider>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/homepage/:id" element={<ProfileDashboard />} />
          </Routes>
        </ContestProvider>
      </div>
    );
  }

export default App;
