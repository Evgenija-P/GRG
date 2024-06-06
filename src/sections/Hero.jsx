import HeroImage from "/images/hero.jpg";

const Hero = () => {
  return (
    <section className="w-full pt-[100px] md:pt-20 xl:pt-[140px]">
      <div className="wrapper">
        <img
          src={HeroImage}
          alt="Про компанію та франчайзинг KFC"
          loading="lazy"
          className="w-full h-[440px] md:h-[764px] xl:h-[600px] object-cover object-bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
