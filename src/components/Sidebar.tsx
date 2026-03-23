import { LayoutGrid, Film, Tv, Bookmark, X, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropDown, setActiveDropDown] = useState();

  const navItems = [
    { title: "Dashboard", icon: LayoutGrid, hasDropdown: false },
    {
      title: "Movies",
      icon: Film,
      hasDropdown: true,
      dropdownItems: ["Trending", "Top Rated", "Upcoming", "Genres"],
    },
    {
      title: "TV Shows",
      icon: Tv,
      hasDropdown: true,
      dropdownItems: ["Popular", "Airing Today", "On The Air", "Top Rated"],
    },
    { title: "Watchlist", icon: Bookmark, hasDropdown: false },
  ];

  return (
    <div
      className={`bg-white rounded-sm drop-shadow-sm h-full ${isOpen ? "w-64" : "w-14"} transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-2 right-4 `}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`mt-15`}>
        {navItems.map((item) => {
          return (
            <div key={item.title}>
              <div className={`flex items-center gap-2 px-3 mb-3`}>
                <item.icon size={20} />
                <span className={`transition-all duration-300`}>
                  {isOpen ? item.title : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
