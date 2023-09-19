import React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/header';

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
      <main style={{ paddingTop: '80px' }}>
        <section id='homesection' style={{ position: 'relative' }}>
          <div style={overlayStyle}></div>
          <div className='text' >
            <h1 className='texth1'>SINCE 2002</h1>
            <p className='textp'>WE BUILD THE TRUST</p>
          </div>
        </section>
      </main>
      
      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Home;



// import React from 'react';
// import Footer from '@/components/footer';
// import Navbar from '@/components/header';

// const Home = () => {
//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
//   };

//   return (
//     <>
//       <Navbar />
//       <main style={{ paddingTop: '80px' }}>
//         <section id="homesection" style={{ position: 'relative' }}>
//           <div style={overlayStyle}></div>
//           <div className="text">
//             <h1 className="texth1">SINCE 2002</h1>
//             <p className="textp">WE BUILD THE TRUST</p>
//           </div>
//         </section>
//       </main>
//       <div class="htc__contact__address add-res bg__cat--1">
//         <div class="container">
//           <div class="row">
//             <div class="col-md-12">
//               <div class="htc__contact__wrap clearfix">
//                 {/* Start Single Address */}
//                 <div class="ht__address__inner">
//                   <div class="ht__address__icon map-pin">
//                     <i class="zmdi zmdi-pin"></i>
//                   </div>
//                   <div class="ht__address__details">
//                     <p>Stock Building, 125 Main Street <br />1st Lane, San Francisco, USA</p>
//                   </div>
//                 </div>
//                 {/* End Single Address */}
//                 {/* Start Single Address */}
//                 <div class="ht__address__inner">
//                   <div class="ht__address__icon glob">
//                     <i class="fa fa-globe" aria-hidden="true"></i>
//                   </div>
//                   <div class="ht__address__details">
//                     <p><a href="mailto:info@example.com">info@example.com</a></p>
//                     <p><a href="#">www.example.com</a></p>
//                   </div>
//                 </div>
//                 {/* End Single Address */}
//                 {/* Start Single Address */}
//                 <div class="ht__address__inner">
//                   <div class="ht__address__icon">
//                     <i class="fa fa-phone" aria-hidden="true"></i>
//                   </div>
//                   <div class="ht__address__details">
//                     <p><a href="tel:(001)24568365987">(001) 24568 365 987</a></p>
//                     <p><a href="tel:(001)65897569784">(001) 65897 569 784</a></p>
//                   </div>
//                 </div>
//                 {/* End Single Address */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer style={{ flexShrink: 0 }} />
//     </>
//   );
// };

// export default Home;
