import { useForm } from "react-hook-form";
import * as yup from "yup";
import ContactList from "./Component/Contacts/ContactList/ContactList";
function App() {
  return (
    <div>
      <h1 className="text-center text-[24px] font-[600]">MY contacts</h1>
      <div className="flex">
        <form action="" className=" flex ">
          <div className="inner_form_div ml-5 rounded-[15px] flex bg-black flex-col p-[30px]  justify-between text-white   h-[480px] borde ">
            <div className="input_group border  border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="">User Name</label>
              <input
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="text"
                name="user_name"
                placeholder="Enter User Name"
              />
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="">User Phone Number</label>
              <input
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="number"
                name="user_phone_number"
                placeholder="Enter User Phone Number"
              />
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="">User Image</label>
              <input
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="file"
                name="user_image"
                placeholder="upload user Image"
              />
            </div>
            {/* ----------------------------------------- */}
            <button className="bg-red-700 p-3 rounded">Enter</button>
          </div>
        </form>
        {/* contact List */}

        <div className="ml-5 w-[600px]  rounded-[15px] bg-black p-4 ">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;