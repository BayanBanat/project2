import React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/header';
import AboutPage from '@/components/services';

const Home = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '750px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  };



  return (
    <>
      <Navbar />
      <main >
        <section id='homesection' >
          <div style={overlayStyle}></div>
          <div className='text' >
            <h3 className='texth1'>SINCE 2002</h3>
            <h1 className='textp'>WE BUILD THE TRUST</h1>
            <p className='p2'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
            <div class="slider__btn">
              <a class="htc__btn" href="/about">ABOUT US</a>
            </div>
          </div>
        </section>
        <section>
          <AboutPage />
        </section>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Home;



