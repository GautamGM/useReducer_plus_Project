import ContactCard from "../../Cards/ContactCard";
import me from "../../../assets/image/gautam.jpg";
import SearchBar from "../../SearchBar/SearchBar";
import { useUserData } from "../../../Context/userContactContext";
import { useState } from "react";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import searchBarFn from "../../../GlobalFunction/SearchBar";

const ContactList = () => {
  // serch string
  const [searchString, setSearchString] = useState("");

  // const { state } = useUserData();

  // search bar fuction upplifting
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const contactData = useSelector((state) => {
    return state.contact;
  });

// search bar function----> Gloabl function --->
  const filterData = searchBarFn(contactData, searchString);

  // ----------------------------------------------------NEWCODE______________________

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
