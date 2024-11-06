import ContactCard from "../../Cards/ContactCard";
import me from "../../../assets/image/gautam.jpg";
import SearchBar from "../../SearchBar/SearchBar";
const ContactList = () => {
  const data = [
    { id: 1, name: "ramu dud val", phone_number: "98XXXXXXX89", img_src: me },
    { id: 2, name: "Samu", phone_number: "98XXXXXXX89", img_src: me },
    { id: 3, name: "Kaka", phone_number: "98XXXXXXX89", img_src: me },
    { id: 4, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 4, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 4, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 4, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
    { id: 4, name: "katapa", phone_number: "98XXXXXXX89", img_src: me },
  ];
  return (
    <div className="">
      <div className=" fixed w-[41%] top-[36px] flex bg-black items-center ">
        <h1 className="text-white text-center p-2 w-[31%] top-[50px] bg-black text-[24px] font-[700] ">
          My contacts
        </h1>
        <SearchBar />
      </div>
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
