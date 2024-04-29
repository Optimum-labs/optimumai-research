import { Footer} from './containers';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Community, Products } from './pages';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>      
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/optimumai-research/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/products" element={<Products />} />
      </Routes>  
      <Footer />
    </div>
  )
}

export default App;