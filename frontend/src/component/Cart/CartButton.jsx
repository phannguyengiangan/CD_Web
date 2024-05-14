// src/CartButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/cart"); // Điều hướng tới trang Cart
  };

  return (
    <IconButton onClick={handleButtonClick}>
      <Badge color="primary" badgeContent={3}>
        <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
