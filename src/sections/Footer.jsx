import Logo from "../icons/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="w-full md:h-[140px] py-[14px] md:py-[30px] h-[92px] bg-[#333333] ">
      <div className="wrapper h-full flex items-center justify-between">
        <a className="logo">
          <img src={Logo} />
        </a>
        <h2 className="w-[120px] text-right md:w-fit text-xs md:text-base xl:text-lg uppercase font-bold text-white">
          ГЛОБАЛЬНА РЕСТОРАННА ГРУПА - УКРАЇНА
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
