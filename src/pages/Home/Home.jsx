import { Possibility, WhatOptimumAi, Header } from '../../containers';
import { Brand } from '../../components';

const Home = () => {
  return (
    <div className='App'>
      <div className="bg">
      </div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatOptimumAi />
      {/* <Features /> */}
      <Possibility />
      {/* <CTA /> */}
      {/* <Blog /> */}
    </div>
  )
}

export default Home;