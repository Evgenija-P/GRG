import sectionsInfo from "../data/sections-text.json";
import Section from "../components/Section";

const AllSections = () => {
  return (
    <>
      {sectionsInfo.map((el, index) => (
        <Section item={el} key={el.id} index={index} />
      ))}
    </>
  );
};

export default AllSections;
