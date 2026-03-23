import folderIcon from "../assets/img/folder_icon.svg";
import plusIcon from "../assets/img/plus-icon.svg";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <motion.div
      layout
      className={`bg-white flex-1 h-full rounded-sm drop-shadow-sm flex flex-col justify-center items-center`}
    >
      <motion.img layout src={folderIcon} alt="" className="w-30" />

      <p className={`text-text-primary mb-6 `}>No files have been added yet</p>
      <button
        className={`bg-[#2C2FC6] py-1 px-3 text-white rounded-sm flex items-center justify-center gap-1`}
      >
        <img src={plusIcon} alt="" className="w-5 brightness-0 invert" /> Add
        File
      </button>
    </motion.div>
  );
};

export default MainContent;
