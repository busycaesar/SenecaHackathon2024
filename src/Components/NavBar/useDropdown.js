import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";



function Collapsible({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-xl hover:text-my-red">
      <div
        className={`flex items-center p-2 mb-2 cursor-pointer space-x-2  hover:text-my-red text-black ${isOpen ? 'open' : ''}`}
        onClick={toggleOpen}
      >
        {isOpen ? <ArrowDropDownIcon fontSize="small" /> : <ArrowRightIcon fontSize="small" />}

        <span className="md:text-[0.9rem] text-[0.5rem] flex-grow hover:text-my-red">{header}</span>

      </div>
      {isOpen && <div className="md:text-[0.7rem] text-black font-gotham hover:text-my-red">{children}</div>}
    </div>
  );
}

export default Collapsible;
