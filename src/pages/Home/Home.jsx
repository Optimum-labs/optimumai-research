import { Blog, Possibility, WhatOptimumAi, Header } from '../../containers';
import { CTA, Brand } from '../../components';

const Home = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatOptimumAi />
      {/* <Features /> */}
      <Possibility />
      <CTA />
      <Blog />
    </div>
  )
}

export default Home;