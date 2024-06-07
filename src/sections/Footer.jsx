import FooterImage from "/images/stripes.png";

const Footer = () => {
  return (
    <footer className="w-full h-fit pt-[14px] md:pt-[20px] bg-red">
      <div className="mx-auto h-[40px] md:h-[60px] flex items-center justify-center mb-[10px]">
        <h2 className="text-xs md:text-base xl:text-lg uppercase font-bold text-white">
          ТОВ «ДТС-Харків»
        </h2>
      </div>
      <div className="w-full h-[30px] md:h-[50px] flex justify-center">
        <img src={FooterImage} alt="зображення" className="h-[30px] md:h-[50px] object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
