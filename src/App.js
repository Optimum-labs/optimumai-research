import { Footer, Blog, Possibility, Features, WhatOptimumAi, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatOptimumAi />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;