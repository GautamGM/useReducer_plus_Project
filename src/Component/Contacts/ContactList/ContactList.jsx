import ContactCard from "../../Cards/ContactCard";
import me from "../../../assets/image/gautam.jpg";
import SearchBar from "../../SearchBar/SearchBar";
import { useUserData } from "../../../Context/userContactContext";
import { useState } from "react";
import { set } from "react-hook-form";
const ContactList = () => {
  // serch string
  const [searchString, setSearchString] = useState("");

  const { state } = useUserData();

  // search bar fuction upplifting
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const filterData = state.filter((data) => {
    return (
      data.user_name.toLowerCase().includes(searchString.toLowerCase()) ||
      data.user_phone_number.includes(searchString)
    );
  });

  console.log(filterData, "filter data");
  return (
    <div className="">
      <div className="SearchBar fixed top-[40px] ml-[15rem] ">
        <SearchBar handleChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 mt-[50px]   ">
        {filterData.map((el) => {
          const { id } = el;
          return (
            <div key={id} className="m-2 ">
              <ContactCard data={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContactList;
