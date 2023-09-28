import Footer from "@/components/footer";
import Navbar from "@/components/headerHome";
import styles from "../styles/equipments.module.css";

const Equipmentspage = () => {
    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "500px",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    };
    return (
        <>
            <Navbar />
            <main>
                <section className={styles.aboutbackground}>
                    <div style={overlayStyle}></div>
                    <div className={styles.textABOUT}>
                        {/* <h3 className='texth1'>WHO WE ARE</h3> */}
                        <h1 className={styles.textpABOUT}>OUR PROJECT</h1>
                    </div>
                </section>
                <section className={styles.sectionTable}>
                    <div className={styles.divTable}>
                        <div className="">
                            <div className={styles.container}>
                            <div className={styles.containerorganization}>
          <div className={styles.iconContainer}>
            <div class="elementor-widget-container">
              <div class="elementor-icon-wrapper">
                <div class="elementor-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="20"
                    viewBox="0 0 21 8"
                    fill="none"
                  >
                    <path d="M7 0H13L6 8H0L7 0Z" fill="#FCC236"></path>
                    <path d="M13 0H7L15 8H21L13 0Z" fill="#FCC236"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <p className={styles.title}>OVERVIEW</p> */}
        </div>
                                <div className="">
                                    <div className="">
                                        <h2 className="">Equipment</h2>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className={styles.row3}>
                                            <table
                                              
                                            >
                                                <thead>
                                                    <tr className="wpdt-cell-row">
                                                        <th
                                                            className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF"
                                                            
                                                        >
                                                            No.
                                                        </th>
                                                        <th
                                                            className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF"
                                                            
                                                        >
                                                            Description
                                                        </th>
                                                        <th
                                                            className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF"
                                                            
                                                        >
                                                            Quantity
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* ... (The rest of the table rows) */}
                                                    <tr className="wpdt-cell-row3 even">
                                                        <td className="" >
                                                            02
                                                        </td>
                                                        <td className="" >
                                                            CAT Bulldozer D9
                                                        </td>
                                                        <td className="" >
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 odd">
                                                        <td className="" >
                                                            03
                                                        </td>
                                                        <td className="wpdt-cell" >
                                                            CAT Grader 140G
                                                        </td>
                                                        <td className="wpdt-cell" >
                                                            4
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 even">
                                                        <td className="" >
                                                            04
                                                        </td>
                                                        <td className="" >
                                                            CAT Grader G16
                                                        </td>
                                                        <td className="" >
                                                            1
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 odd">
                                                        <td className="" >
                                                            05
                                                        </td>
                                                        <td className="" >
                                                            CAT Grader H16
                                                        </td>
                                                        <td className="" >
                                                            1
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 even">
                                                        <td className="" >
                                                            06
                                                        </td>
                                                        <td className="" >
                                                            POCLAIN Hyd. Excavator 90CL
                                                        </td>
                                                        <td className="" >
                                                            14
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 odd">
                                                        <td className="" >
                                                            07
                                                        </td>
                                                        <td className="" >
                                                            KOMATSU Excavators PC340
                                                        </td>
                                                        <td className="" >
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 even">
                                                        <td className="" >
                                                            08
                                                        </td>
                                                        <td className="" >
                                                            BAKHOE Loader 680
                                                        </td>
                                                        <td className="" >
                                                            3
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 odd">
                                                        <td className="" >
                                                            09
                                                        </td>
                                                        <td className="" >
                                                            KOMATSU Loader (Capacity = 2 m³)
                                                        </td>
                                                        <td className="" >
                                                            11
                                                        </td>
                                                    </tr>
                                                    <tr className="wpdt-cell-row3 even">
                                                        <td className="" >
                                                            10
                                                        </td>
                                                        <td className="" >
                                                            KOMATSU Loader (Capacity = 1.5 m³)
                                                        </td>
                                                        <td className="" >
                                                            4
                                                        </td>
                                                    </tr>
                                                    {/* ... (Add more rows as needed) */}

                                                </tbody>
                                            </table>
                                            <style id="wpdt-custom-style-1">
                                                {`
    .wpdt-fs-000018 {
      font-size: 20px !important;
    }
    .wpdt-bc-0274BE {
      background-color: #0274BE !important;
    }
    .wpdt-tc-FFFFFF {
      color: #FFFFFF !important;
    }
  `}
                                            </style>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            <Footer style={{ flexShrink: 0 }} />
        </>
    )



}
export default Equipmentspage;