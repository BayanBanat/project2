import React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/header';
import styles from '../styles/aboutbage.module.css';



const About = () => {
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '650px',
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


                <section className={styles.weare}>
                    <div className={styles.divabouttext}>
                    <p className={styles.text}>
                            WHO WE ARE
                 
                            <br></br>
                            <br></br>
                            The City Rocks Contracting Company, located in Riyadh, is considered one of the establishments engaged in providing and executing contracts for building construction and interior and exterior decoration, as well as maintenance. The company was founded in 2002. Since its inception, the company has specialized in carrying out various tasks, including water networks and tanks, road maintenance, infrastructure, and electrical works.
                        </p>
                    </div>
                    <div className={styles.divaboutimg}>
                        <img
                            className={styles.imgabout}
                            src="https://images-ext-1.discordapp.net/external/ektm-aHLm-JyuwVprlaZLQuQIn7TuMtchRcDkjTrXcU/%3Fw%3D996%26t%3Dst%3D1695240984~exp%3D1695241584~hmac%3Da111e70b7bb926499385dff1daf5831f840e5e59b94b26a6c970d0e930d7b8d9/https/img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?width=1040&height=669"
                            alt="Image 2"
                        />
                    </div>

                </section>

                <section className={styles.weare} >
                <div className={styles.divabouttext} >
                    <p className={styles.text}>
                             VISION
                            <br></br>
                            <br></br>
                            We look forward to expanding into future advanced projects and implementing intelligent ideas by leveraging the latest technology to take our company to a global level in delivering services with the highest quality and professionalism.
                        </p>
                    </div>
                <div className={styles.divaboutimg} >
                        <img
                            className={styles.imgabout}
                            src="https://images-ext-2.discordapp.net/external/MqyGRCypWwLPNAa_oUTe6tfKrATyyOo6GKQEQZPdROM/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1442964426.1687759231%26semt%3Dais/https/img.freepik.com/free-photo/excavator-action_1112-1598.jpg?width=860&height=583"
                            alt="Image 2"
                        />
                    </div>


                </section>
                <section className={styles.weare}>
                    <div className={styles.divabouttext}>
                    <p className={styles.text}>
                            MISION
                 
                            <br></br>
                            <br></br>
                            At City Rocks Company, we have a strong goal of building long-term partnerships with our clients, and we spare no effort to achieve this objective in order to meet the ambitions and needs of both our current and future clients. We are also following an organized plan to expand our operations, aiming to cover our services throughout the entire beloved Kingdom of Saudi Arabia.                        </p>
                    </div>
                    <div className={styles.divaboutimg} >
                        <img
                            className={styles.imgabout}
                            src="https://images-ext-2.discordapp.net/external/-2c3-0v0lEScq_R5MTFliYk_qX1DDEsFpQoU5fNTg-0/%3Fw%3D996%26t%3Dst%3D1695242568~exp%3D1695243168~hmac%3Dc4ac7c371a999ecd169310dd81bdc30016a343d995dadee560fc713f2d9f3c9e/https/img.freepik.com/free-photo/excavator-action_1112-1599.jpg?width=1010&height=669"
                            alt="Image 2"
                         
                        />
                    </div>

                </section>
            </main>

            <Footer style={{ flexShrink: 0 }} />
        </>
    );
};

export default About;



