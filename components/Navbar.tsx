import React from "react";
import { motion } from "framer-motion";
import { navbarAnimation } from "../utils/animations";

const Navbar = () => {
  return (
    <motion.nav
      className='flex justify-between items-center py-12'
      variants={navbarAnimation}
    >
      <h3 className='flex flex-col font-black text-4xl leading-[80%]'>
        <span>Robots</span> <span>Co</span>
      </h3>
      <div>Menu</div>
    </motion.nav>
  );
};

export default Navbar;
