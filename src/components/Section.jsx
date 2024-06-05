import PropTypes from "prop-types";

const Section = ({ item, index }) => {
  return (
    <section
      className={`section ${index === 1 ? "bg-bgLite" : index === 2 ? "bg-grey" : "bg-white"}`}
    >
      <div className="wrapper relative flex flex-col items-center justify-center">
        <div className="section__title--before bg-red" />
        <div className="max-w-[245px] xl:min-w-[360px] my-[30px]">
          <h2 className="section__title text-center">{item.title}</h2>
        </div>
        <div className="flex flex-col gap-y-5">
          {item.texts?.map((el, index) => (
            <p key={index} className="section__text text-justify">
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
