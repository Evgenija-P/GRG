import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImagesSwiper({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container h-screen">
      <Slider {...settings}>
        {items.map(el => (
          <img className="h-screen w-fit object-contain" src={el} key={el} />
        ))}
      </Slider>
    </div>
  );
}

ImagesSwiper.propTypes = { items: PropTypes.array.isRequired };

export default ImagesSwiper;
