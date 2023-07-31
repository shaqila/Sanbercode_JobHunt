import Card from "../component/Card";
import SearchBar from "../component/SearchBar";

const Vacancy = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 ">
        <div className="w-full">
          <div className="mx-6 md:mx-44 my-5 ">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 my-12">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
