import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card
      className="flex gap-5 w-64 p-5"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <HomeIcon style={{ color: "#7ab730" }} />
      <div className="space-y-3 text-black">
        <h1 className="font-semibold text-lg" style={{ color: "#7ab730" }}>
          Home
        </h1>
        <p>5, duong 7, Linh Chieu, Thu Duc</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            style={{ backgroundColor: "#000000" }}
            onClick={() => handleSelectAddress(item)}
          >
            select
          </Button>
        )}
      </div>
    </Card>
  );
};
