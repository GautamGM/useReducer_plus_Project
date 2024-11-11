import { useForm } from "react-hook-form";
import ContactList from "./Component/Contacts/ContactList/ContactList";
import { useState, useEffect, useReducer } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./Schema/FoemSchem.jsx";
import { useUserData } from "./Context/userContactContext.jsx";
import { useDispatch,useSelector } from "react-redux";
import { addContact } from "./ReduxToolkit/Store/ContactStore.jsx";
// import { USER_DATA } from "./Reducers/ContactReducer.jsx";
function App() {
  // useDispacth
  const dispatch=useDispatch()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      user_name: "",
      user_phone_number: "",
      user_image: "",
    },
  });

  // REducer
  // const [state, dispatch] = useReducer(userContactReducer, []);

  // useState of sate Manegemnt
  // usecontext +useReducer

// const {state,dispatch,USER_DATA} =useUserData()
// --------------------

  const handleAddDetail = (data) => {
    let newData;
    let imageURL;
    const path = data.user_image[0];
    if (path) {
      imageURL = URL.createObjectURL(path);
    }
    if (imageURL) {
      newData = { ...data, id: new Date().getTime(), user_image: imageURL };
    } else {
      newData = { ...data, id: new Date().getTime(), user_image: "" };
    }
    // // setuserData((prev) => [...prev, newData]);
    // dispatch({ type: USER_DATA, payload: newData });
    dispatch(addContact(newData))
    reset()

   
  };
  // Cleanup URLs when component unmounts
  // useEffect(() => {
  //   return () => {
  //     state.forEach((imageURL) => URL.revokeObjectURL(imageURL));
  //     console.log("useEffect is run");
  //   };
  // }, [state]);



  return (
    <div>
      <h1 className="text-center text-[24px] font-[600]">
        Practice of useReducer with contact Project
      </h1>
      <div className="flex">
        <form
          action=""
          className=" flex"
          onSubmit={handleSubmit(handleAddDetail)}
        >
          <div className="inner_form_div ml-5 rounded-[15px] flex bg-black flex-col p-[30px]  justify-between text-white   h-[480px] borde ">
            <div className="input_group border  border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userName">User Name</label>
              <input
                
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="text"
                name="user_name"
                placeholder="Enter User Name"
                id="userName"
                {...register("user_name")}
              />
              <p className="text-[red]">{errors.user_name?.message}</p>
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userPhoneNumber">User Phone Number</label>
              <input
                // value={user_phone_number||""}
                className="text-black  w-full h-[35px] rounded p-2 mt-2"
                type="number"
                name="user_phone_number"
                placeholder="Enter User Phone Number"
                id="userPhoneNumber"
                {...register("user_phone_number")}
              />
              <p className="text-[red]">{errors.user_phone_number?.message}</p>
            </div>
            {/* ----------------------------------------- */}
            <div className="input_group border border-[#B91C1C] p-3 rounded-[10px]">
              <label htmlFor="userImage">User Image</label>
              <input
                className="text-white  w-full h-[35px] rounded p-2 mt-2"
                type="file"
                name="user_image"
                placeholder="upload user Image"
                id="userImage"
                {...register("user_image")}
              />
            </div>
            {/* ----------------------------------------- */}
            <button className="bg-red-700 p-3 rounded">Enter</button>
          </div>
        </form>
        {/* contact List */}

        <div className="ml-5 w-[600px]  rounded-[15px] bg-black p-4 overflow-y-scroll h-[480px] ">
          <div className=" fixed w-[550px] top-[36px] flex bg-black items-center ">
            <h1 className="text-white text-center p-2  top-[50px] bg-black text-[24px] font-[700] ">
              My contacts
            </h1>
          </div>
          <ContactList/>
        </div>
      </div>
    </div>
  );
}

export default App;
