import {
  LayoutGrid,
  Film,
  Tv,
  Bookmark,
  X,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const handleNavClick = (item) => {
    if (!item.hasDropdown) return;
    if (!isOpen) {
      setIsOpen(true); // expand sidebar first, then open dropdown
      setActiveDropdown(item.title);
      return;
    }
    // toggle: same item closes, different item opens
    setActiveDropdown((prev) => (prev === item.title ? null : item.title));
  };

  return (
    <div
      className={`bg-white rounded-sm drop-shadow-sm h-full ${isOpen ? "w-64" : "w-14"} transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 right-4"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="mt-15">
        {navItems.map((item) => {
          const isDropdownOpen = activeDropdown === item.title;

          return (
            <div key={item.title}>
              {/* Nav row */}
              <div
                className="flex items-center justify-between px-3 mb-3 cursor-pointer"
                onClick={() => handleNavClick(item)}
              >
                <div className="flex items-center gap-2">
                  <item.icon size={20} />
                  {isOpen && <span>{item.title}</span>}
                </div>

                {/* Only show chevron when sidebar is open and item has dropdown */}
                {item.hasDropdown && isOpen && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Dropdown items */}
              {item.hasDropdown && isOpen && isDropdownOpen && (
                <div className="mb-2">
                  {item.dropdownItems.map((subItem) => (
                    <div
                      key={subItem}
                      className="px-10 py-1 cursor-pointer text-sm"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
