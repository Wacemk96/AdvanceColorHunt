import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import CreatePalette from './pages/CreatePalette';
import FooterSection from './components/FooterSection';
import SinglePalette from './pages/SinglePalette';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/create"
          element={<CreatePalette />}
        />
        <Route
          path="/:id"
          element={<SinglePalette />}
        />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
