import React from 'react';
import Footer from '@/components/footerar';
import Navbar from '@/components/headerHomear';
import AboutPage from '@/components/servicesar';
import ClientPage2 from '@/components/services2ar';

const Home = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '750px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // قم بضبط درجة التعتيم حسب الحاجة
  };

  return (
    <>
      <Navbar />
      <main >
        <section id='homesection' >
          <div style={overlayStyle}></div>
          <div className='text' >
            <h3 className='texth1'>منذ عام 2002</h3>
            <h1 className='textp'>نحن نبني الثقة</h1>
            <p className='p2'>من ناحية أخرى، ندين بالاستياء الصادق ونكره الرجال الذين يتسللون بهوى اللحظة وينحدرون بسحر متعة اللحظة</p>
            <div class="slider__btn">
              <a class="htc__btn" href="/about">عنا</a>
            </div>
          </div>
        </section>
        <section>
          <AboutPage />
        </section>
        <section>
          <ClientPage2 />
        </section>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Home;
