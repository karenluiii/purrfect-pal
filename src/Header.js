import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  // Gives browser/session history
  const navigate = useNavigate();

  function handleClick() {
    backButton == "/chat" ? navigate("/chat") : navigate("/");
  }

  return (
    <div className="header">
      {/* If backButton was passed in as a prop to Header, then the back button icon will show up.
        Otherwise, the regular account/profile button shows up */}
      {backButton ? (
        <IconButton onClick={handleClick}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountCircleIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <div className="header__logo">
          <h2> Purrfect Pal </h2>
        </div>
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
