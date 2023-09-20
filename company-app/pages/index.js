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
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  };



  return (
    <>
      <Navbar />
      <main >
        <section id='homesection' >
          <div style={overlayStyle}></div>
          <div className='text' >
            <h1 className='texth1'>SINCE 2002</h1>
            <p className='textp'>WE BUILD THE TRUST</p>
            <p className='textp2'>
              With a legacy dating back to 2002, our construction company has been dedicated to building not only structures but also trust and reliability. We take pride in our commitment to delivering high-quality projects that stand the test of time. 
            </p>

          </div>
        </section>
        <section>
          <AboutPage/>
        </section>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Home;



