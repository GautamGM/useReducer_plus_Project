const ContactCard=({data})=>{
const{name,phone_number,img_src}=data
    return(
       <div> 
        <div className="  flex items-center justify-between border bg-red-700 text-white p-2  rounded-[10px] ">
            <div className="imgage bg-black w-[50px] h-[50px] rounded-full text-center flex justify-center items-center ">
                <img src={img_src} alt="" className="w-[100%] h-[100%] object-cover rounded-[100%]" />
            </div>
            <div className="contact-detail">
                <div className="name">{name}</div>
                <div className="number">{phone_number}</div>
            </div>
        </div>
       </div>
    )
}
export default ContactCard