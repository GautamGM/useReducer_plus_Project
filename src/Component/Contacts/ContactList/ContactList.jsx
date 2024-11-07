import ContactCard from "../../Cards/ContactCard";
import me from "../../../assets/image/gautam.jpg";
import SearchBar from "../../SearchBar/SearchBar";
import { useUserData } from "../../../Context/userContactContext";
const ContactList = () => {
  const {state}=useUserData()
  console.log(state,"data")
  return (
    <div className="">
  
      <div className="grid grid-cols-1 mt-[50px]   ">
        {state.map((el) => {
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
