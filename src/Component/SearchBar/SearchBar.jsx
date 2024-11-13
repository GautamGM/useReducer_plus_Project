const SearchBar = ({handleChange}) => {
  return (
    <div className=" p-2 rounded-[15px] text-end  border-red-700 ">
      <input
        type="text"
        className="w-[290px] h-[40px] rounded-[15px] p-3  "
        placeholder="search here..."
        onChange={handleChange}
      />
    </div>
  );
};
// export default SearchBar;
export {SearchBar};
