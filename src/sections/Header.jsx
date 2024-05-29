import Logo from "../icons/logo.svg";

const Header = () => {
  return (
    <header className="w-full h-20 xl:h-[140px] py-[14px] ">
      <div className="wrapper h-full flex items-center justify-between">
        <a className="logo">
          <img src={Logo} />
        </a>
        <h2 className="header__title">ГЛОБАЛЬНА РЕСТОРАННА ГРУПА - УКРАЇНА</h2>
      </div>
    </header>
  );
};

export default Header;
