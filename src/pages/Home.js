import Scanner from "../components/Scanner";
import image from "../components/assets/home.jpg";
import styles from "./Home.module.css";
import image1 from "../components/assets/reliable.jpg";
import image2 from "../components/assets/durable.png";
import image3 from "../components/assets/flexible.png";
function Home() {
  const paragraphStyle = {
    marginTop: "40px",
    lineHeight: 0,
    alignItems: "center",
  };
  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column", // Align images below the h2 element
    alignItems: "center",
  };
  const textStyle = {
    color: "red",
  };
  return (
    <div>
      <img src={image} alt="Tomoegawa Logo" style={{ width: "100%" }} />

      {/* <article className={styles.article}> */}
      <div className={styles.header}>
        <h1>Tomoegawa Aura India</h1>
        <p style={paragraphStyle}>Electrical Grade Insulation Paper </p>
        <p>High Density Electrical Grade Insulation Paper</p>
      </div>
      {/* <picture className={styles.image}> */}
      {/* <source media="(min-width: 0px)" srcSet={image} /> */}
      {/* </picture> */}
      <div className={styles.scannerContainer}>
        <div style={imageContainerStyle}>
          <h2>
            Innovative technologies and services for{" "}
            <span style={textStyle}>Transformer</span> Industry
            <br />
            Exclusive manufacturers of{" "}
            <span style={textStyle}>Insulation paper</span>
          </h2>
          <div className={styles.imagesContainer}>
            <img src={image1} alt="Image 1" className={styles.image} />
            <img src={image2} alt="Image 2" className={styles.image} />
            <img src={image3} alt="Image 3" className={styles.image} />
          </div>
        </div>
        <Scanner />
      </div>
      {/* </article> */}
    </div>
  );
}

export default Home;
