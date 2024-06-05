import sectionsInfo from "../data/sections-text.json";
import Section from "../components/Section";

const AllSections = () => {
  return (
    <>
      {sectionsInfo.map((el, index) => (
        <Section item={el} key={el.id} index={index} />
      ))}
      <h2 className="text-4xl font-medium text-red text-center pb-16 pt-0 bg-grey">
        Слава Україні!
      </h2>
    </>
  );
};

export default AllSections;
