import ContactCard from "../../Cards/ContactCard";
import me from "../../../assets/image/gautam.jpg";
import SearchBar from "../../SearchBar/SearchBar";
const ContactList = () => {
  const data = [
    { id: 1, name: "ramu dud val", phone_number: "98XXXXXXX89", img_src: me },
    { id: 2, name: "Samu", phone_number: "98XXXXXXX89", img_src: me },
    { id: 3, name: "Kaka", phone_number: "98XXXXXXX89", img_src: me },
    { id: 5, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 6, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 7, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 8, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 9, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
  ];
  return (
    <div className="">
    
      <div className="grid grid-cols-1 mt-[50px]   ">
        {data.map((el) => {
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
