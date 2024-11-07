const ContactCard=({data})=>{
const{user_name,user_phone_number,user_image}=data
    return(
       <div> 
        <div className="  flex items-center justify-between border bg-red-700 text-white p-2  rounded-[10px] ">
            <div className="imgage bg-black w-[50px] h-[50px] rounded-full text-center flex justify-center items-center ">
                <img src={user_image}   alt="" className="w-[100%] h-[100%] object-cover rounded-[100%]" />
            </div>
            <div className="contact-detail">
                <div className="name">{user_name}</div>
                <div className="number">{user_phone_number}</div>
            </div>
        </div>
       </div>
    )
}
export default ContactCard