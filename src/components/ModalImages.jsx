import PropTypes from "prop-types";
import ImagesSwiper from "./ImagesSwiper";
import Overlay from "./Overlay";

const ModalImages = ({ items, clickFn }) => {
  return (
    <Overlay clickFn={clickFn}>
      <ImagesSwiper items={items} />
    </Overlay>
  );
};

ModalImages.propTypes = {
  clickFn: PropTypes.func,
  items: PropTypes.array.isRequired,
};

export default ModalImages;
