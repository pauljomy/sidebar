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
import { AnimatePresence, motion } from "framer-motion";

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

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState("");

  const handleDropdownToggle = (title: string) => {
    return setActiveDropdown((prev) => (prev === title ? "" : title));
  };

  return (
    <motion.div
      layout
      className={`bg-white ${isOpen ? "w-64" : "w-14"} rounded-sm drop-shadow-sm`}
    >
      <div className="flex items-center justify-between p-4 ">
        <h1 className="font-bold text-xl">
          {isOpen ? (
            "Dashboard"
          ) : (
            <Menu size={24} onClick={() => setIsOpen(!isOpen)} />
          )}
        </h1>
        {isOpen && <X size={24} onClick={() => setIsOpen(!isOpen)} />}
      </div>

      <div className={`pt-6`}>
        {navItems.map((item) => {
          return (
            <div key={item.title}>
              <motion.div
                layout
                className={`flex items-center px-4 py-3 justify-between `}
                onClick={() =>
                  item.hasDropdown && isOpen && handleDropdownToggle(item.title)
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon size={24} />
                  {isOpen ? item.title : ""}
                </div>

                {item.hasDropdown && isOpen && (
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-200  ${activeDropdown === item.title ? "rotate-180" : ""}`}
                  />
                )}
              </motion.div>

              {item.hasDropdown && isOpen && activeDropdown === item.title && (
                <div>
                  <AnimatePresence>
                    {item.dropdownItems?.map((dropDownItem) => (
                      <motion.div
                        key={dropDownItem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="px-13 py-2 "
                      >
                        {dropDownItem}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
