import sectionsInfo from "../data/sections-text.json";
import Section from "../components/Section";

const AllSections = () => {
  return (
    <>
      {sectionsInfo.map((el, index) => (
        <Section item={el} key={el.id} index={index} />
      ))}
      <h2 className="text-6xl font-extrabold text-red text-center my-16 ">Слава Україні!</h2>
    </>
  );
};

export default AllSections;
