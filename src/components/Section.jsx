import PropTypes from "prop-types";

const Section = ({ item, index }) => {
  return (
    <section
      className={`section ${index === 1 ? "bg-bgLite" : index === 2 ? "bg-grey" : "bg-white"}`}
    >
      <div className="wrapper relative flex flex-col xl:flex-row gap-y-5 xl:gap-x-[120px]">
        <div className="section__title--before" />
        <div className="max-w-[245px] xl:min-w-[360px] mt-[30px] mb-[10px]">
          <h2 className="section__title">{item.title}</h2>
        </div>
        <div className="flex flex-col gap-y-5">
          {item.texts?.map((el, index) => (
            <p key={index} className="section__text">
              {el}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Section;
