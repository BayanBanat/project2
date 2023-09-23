import React from "react";
import Footer from "@/components/footerar";
import Navbar from "@/components/headerProjectAr";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "الاسم: تصريف الفيضانات ومنع مخاطرها في العيونة والجبيلية.",
    major:
      "الموقع: منطقة الحدود الشمالية.",
    image:
      "https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais",
  },
  {
    name: "تنفيذ مشاريع مياه المجموعة 7/3 في منطقة الحدود الشمالية",
    major:
      "الموقع: أمانة العينة وبلدية الجبيلة.",
    image:
      "https://img.freepik.com/free-photo/road-construction_342744-602.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais",
  },
  {
    name: "عملية تجديد المدرسة الابتدائية الخامسة والمدرسة الثانوية الثانية في المجمعة",
    major:
      "الموقع: محافظة المجمعة.",
    image:
      "https://img.freepik.com/free-photo/gray-pipe-with-water-coming-out-its-hole_181624-4705.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais",
  },
  {
    name: "عملية بناء المدرسة الابتدائية الأولى في الشعبة",
    major:
      "الموقع: محافظة المجمعة.",
    image:
      "https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500824.jpg?w=996&t=st=1695228680~exp=1695229280~hmac=ac6303f834ab800b6c53c9895b103c7988d8f6f14c57b7bd8b692ca98ca449fe",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/7 - رقم العقد [1]",
    major:
      "الموقع: منطقة نجران.",
    image:
      "https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?w=996&t=st=1695228852~exp=1695229452~hmac=77c3f5d36f15df3d04e1369f154e4425ebff95343abedb3bcd65f12d47c88284",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/6 - رقم العقد [2]",
    major:
    "الموقع: منطقة نجران.",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  
  {
    name: "عقد تنفيذ شبكة مياه الدوادمي - رقم العقد [2]",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: "تنفيذ شبكة مياه الدوادمي",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: "تركيب المأوى لمجموعة 30",
    major:
    "الموقع: مدينة الرياض.",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },

  {
    name: "مشاريع مياه للمجموعة 1/5",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: "عقد تنفيذ شبكات مياه في مدينة وادي الدواسر",
    major:
      "الموقع: محافظة وادي الدواسر",
    image:
      "https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9",
  },
  {
    name: "عقد استكمال ربط المنازل وعداداتها في المدن والقرى في منطقة جازان",
    major:
      "الموقع: منطقة جازان",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // ضبط الشفافية حسب الحاجة
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            {/* <h3 className='texth1'>WHO WE ARE</h3> */}
            <h1 className={styles.textpABOUT}>مشروعاتنا</h1>
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
        </div>

        <div style={{ padding: "50px" }}>
          <div id="about" className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30"
                >
                  <div >
                    <img
                     className={styles.imgproject}
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="inset-x-0 p-2 bg-white bottom-20">
                    <h1 className="text-black text-s font-dmserif">
                      {member.name}
                    </h1>
                    <p className="text-black text-s">{member.major}</p>
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
