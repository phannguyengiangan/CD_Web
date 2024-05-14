import { IconButton, Chip } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://product.hstatic.net/1000217401/product/18_9d5cdb06115a4327aa2d973b7720fb3e_large.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p style={{ color: "#7AB730" }}>biryani </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton>
                  <RemoveCircleOutlineIcon style={{ color: "#000000" }} />
                </IconButton>
                <div
                  className="w-5 h-5 text-xs flex items-center justify-center"
                  style={{ color: "#000000" }}
                >
                  {5}
                </div>
                <IconButton>
                  <AddCircleOutlineIcon style={{ color: "#000000" }} />
                </IconButton>
              </div>
              <p style={{ color: "#7ab730" }}> 54000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 1, 1].map((item) => (
          <Chip
            label={"snack"}
            style={{ backgroundColor: "#f0f0f0", color: "#000000" }}
          />
        ))}
      </div>
    </div>
  );
};
