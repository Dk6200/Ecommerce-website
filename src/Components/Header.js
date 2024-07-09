import CartIcon from "./Cart";
import Logo from "./Logo";
import SearchBar from "./Searchbar";

function Header(props) {
  return (
    <header className=" bg-red p-4 text-white flex justify-between items-center shadow-md">
      <Logo />
      <SearchBar onSearch={props.handleSearch} />
      <CartIcon />
    </header>
  );
}
export default Header;
