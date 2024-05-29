import HeroImage from "/images/hero.jpg";

const Hero = () => {
  return (
    <section className="w-full pt-5 md:pt-10 xl:pt-[60px]">
      <div className="wrapper ">
        <img
          src={HeroImage}
          alt="Про компанію та франчайзинг KFC"
          loading="lazy"
          className="w-full h-[440px] md:h-[764px] xl:h-[856px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
