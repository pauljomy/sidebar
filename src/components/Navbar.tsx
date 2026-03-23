import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      layout
      className={` h-12  bg-white drop-shadow-sm rounded-sm`}
    ></motion.div>
  );
};

export default Navbar;
