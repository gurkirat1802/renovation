import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import PortfolioPage from './Pages/PortfolioPage';
import ServicesPage from './Pages/ServicesPage';
import FullHome from './components/FullHome';
import Basementrenovation from './components/Basementrenovation';
import Painting from './components/Painting';
import Kitchen from './components/Kitchen';
import Bathroom from './components/Bathroom';
import Accentwalls from './components/Accentwalls';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/fullhomerenovation" element={<FullHome />} />
        <Route path="/services/basementrenovation" element={<Basementrenovation />} />
        <Route path="/services/painting" element={<Painting />} />
        <Route path="/services/kitchenremodeling" element={<Kitchen />} />
        <Route path="/services/bathroomremodeling" element={<Bathroom />} />
        <Route path="/services/accentwalls" element={<Accentwalls />} />
      </Routes>
    </>
  )
}

export default App;
