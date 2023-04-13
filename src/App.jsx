import './styles/reset.css';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/ui/page/HomePage';
import LoginPage from './components/ui/page/LoginPage';
import ProfilePage from './components/ui/page/ProfilePage';
import Header from './components/layout/header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}
export default App;
