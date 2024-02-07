
import Navbar from "./Navbar.tsx";
import SearchInput from "./SearchInput.tsx";

const Header = ({ search }) => {
  return (
    <header>
      <Navbar />
      <SearchInput searchTerm={search} />
    </header>
  );
};

export default Header
