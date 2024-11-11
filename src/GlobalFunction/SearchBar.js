// Searchbar Function global
const  searchBarFn=(data,searchString)=> {
    return data.filter((data) => {
       return (
         data.user_name.toLowerCase().includes(searchString.toLowerCase()) ||
         data.user_phone_number.includes(searchString)
       );
     });
   }
export default searchBarFn