import { LayoutGrid, Film, Tv, Bookmark, X, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeState, setActiveState] = useState();

  // const navItems = [
  //   { title: "Dashboard", icon: LayoutGrid, hasDropdown: false },
  //   {
  //     title: "Movies",
  //     icon: Film,
  //     hasDropdown: true,
  //     dropdownItems: ["Trending", "Top Rated", "Upcoming", "Genres"],
  //   },
  //   {
  //     title: "TV Shows",
  //     icon: Tv,
  //     hasDropdown: true,
  //     dropdownItems: ["Popular", "Airing Today", "On The Air", "Top Rated"],
  //   },
  //   { title: "Watchlist", icon: Bookmark, hasDropdown: false },
  // ];

  return (
    <div
      className={`bg-white rounded-sm drop-shadow-sm h-full ${isOpen ? "w-64" : "w-14"} transition-all ease-in-out`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-2 right-4 `}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
