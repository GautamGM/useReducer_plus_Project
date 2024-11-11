import { useDispatch } from "react-redux";
import { removeContact } from "../../ReduxToolkit/Store/ContactStore";


const ContactCard = ({ data }) => {
    const dispatch=useDispatch()
  const { user_name, user_phone_number, user_image,id } = data;
//   Delete-Contact
const handleDelete=(id)=>{
    dispatch(removeContact(id))
}
  return (
    <div>
      <div className="  flex items-center justify-between border bg-red-700 text-white p-2  rounded-[10px] ">
        <div className="imgage bg-black w-[50px] h-[50px] rounded-full text-center flex justify-center items-center ">
          <img
            src={user_image}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-[100%]"
          />
        </div>
        <div className="contact-detail flex  items-center ">
          <div className="name mr-3 ">{`${user_name.charAt(0).toUpperCase().concat(user_name.slice(1))}`}</div>
          <div className="number">{user_phone_number}</div>
          <button className="border p-2 w-[100px] ml-3 bg-black rounded-[12px] hover:bg-white hover:text-black hover:shadow-lg shadow-[black] border-none" onClick={()=>handleDelete(id)} >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
