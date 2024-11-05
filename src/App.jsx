import { useForm } from "react-hook-form";
import * as yup from "yup";
import ContactList from "./Component/Contacts/ContactList/ContactList";
import { useState } from "react";
import ImageUploader from "./Reducers/ContactReducer.jsx";

function App() {
  const userData={
    id:null,
    name:"",
    phone_number:null,
    img_src:""
  }
  const [value,setvalue]=useState(userData)
const handleChange=(e)=>{
  console.log(e.target.value,e.target.name)
  console.log(e.target.files[0])
}
  return (
    <div>
      <h1 className="text-center text-[24px] font-[600]">Practice of useReducer with contact Project</h1>
      <div className="flex">
        <form action="" className=" flex ">
          <div className="inner_form_div ml-5 rounded-[15px] flex bg-black flex-col p-[30px]  justify-between text-white   h-[480px] borde ">
            <div className="input_group border  border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userName">User Name</label>
              <input onChange={handleChange}
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="text"
                name="user_name"
                placeholder="Enter User Name"
                id="userName"
              />
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userPhoneNumber">User Phone Number</label>
              <input onChange={handleChange}
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="number"
                name="user_phone_number"
                placeholder="Enter User Phone Number"
                id="userPhoneNumber"
              />
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userImage">User Image</label>
              <input onChange={handleChange}
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="file"
                name="user_image"
                placeholder="upload user Image"
                id="userImage"
              />
            </div>
            {/* ----------------------------------------- */}
            <button className="bg-red-700 p-3 rounded">Enter</button>
          </div>
        </form>
        {/* contact List */}

        <div className="ml-5 w-[600px]  rounded-[15px] bg-black p-4 overflow-y-scroll h-[480px] ">
          <ContactList />
        </div>
      </div>
      <ImageUploader/>
    </div>
  );
}

export default App;
