import React, { useState } from "react";

import logoImage from "../assets/logo.svg";
import NewHabitForm from "./NewHabitModal";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <NewHabitForm />
    </div>
  );
};

export default Header;
