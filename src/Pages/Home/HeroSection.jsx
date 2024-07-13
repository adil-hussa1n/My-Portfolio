export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm ADIL</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Computer Science & Engineering Student at <br /> Leading University, Sylhet
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
