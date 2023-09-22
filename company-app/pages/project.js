import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/headerHome";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "The drainage of floods and the prevention of their hazards in Al-Uyunah and Al-Jubailiyah.",
    // major:
    //   "We provide all aspects of construction and building work, from executing reinforcement works to everything related to infrastructure from start to finish.",
    image:
      "https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais",
  },
  {
    name: "Road Construction",
    major:
      "We offer comprehensive road maintena such as lighting, power generation stations, transformers, communications, control, and more.",
    image:
      "https://img.freepik.com/free-photo/road-construction_342744-602.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais",
  },
  {
    name: "Water & Wastewater Network",
    major:
      "We provide all services related to water network construction and maintenance, in addition to sewage and sanitation works.",
    image:
      "https://img.freepik.com/free-photo/gray-pipe-with-water-coming-out-its-hole_181624-4705.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais",
  },
  {
    name: "Landscaping and site organization",
    major:
      "Designing, landscaping, and maintainth providing the best ideas to clients for decorating gardens with the latest methods and equipment.",
    image:
      "https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500824.jpg?w=996&t=st=1695228680~exp=1695229280~hmac=ac6303f834ab800b6c53c9895b103c7988d8f6f14c57b7bd8b692ca98ca449fe",
  },
  {
    name: "Underground Electrical ,lighting , Telephone , Lines.",
    major:
      "Installation and maintenance of electrical systems and lighting solutions.",
    image:
      "https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?w=996&t=st=1695228852~exp=1695229452~hmac=77c3f5d36f15df3d04e1369f154e4425ebff95343abedb3bcd65f12d47c88284",
  },
  {
    name: " maintenance of both main and submain water networks.",
    major:
      "Design, installation, ent water distribution and delivery",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: " maintenance of both main and submain water networks.",
    major:
      "Design, installation, ent water distribution and delivery",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: " maintenance of both main and submain water networks.",
    major:
      "Design, installation, ent water distribution and delivery",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: " maintenance of both main and submain water networks.",
    major:
      "Design, installation, ent water distribution and delivery",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: " maintenance of both main and submain water networks.",
    major:
      "Design, installation, ent water distribution and delivery",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },




];

const Projectpage = () => {
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

        <div style={{ padding: "50px" }}>
          <div id="about" className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="h-96 w-72">
                    <img
                      className="object-cover w-full "
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-white">
                    <h1 className="text-black text-m font-dmserif">
                      {member.name}
                    </h1>
                    <p className="text-black text-m">{member.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Projectpage;