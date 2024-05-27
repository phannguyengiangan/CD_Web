import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

export const MenuCard = () => {
  return (
    <Accordion style={{ backgroundColor: "#f0f0f0", color: "#333" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://product.hstatic.net/1000217401/product/18_9d5cdb06115a4327aa2d973b7720fb3e_large.png"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2x1">
              <p className="font-semibold text-xl">
                Bánh Thưởng/Snack Mèo Tempations Thái Lan
              </p>
              <p>499.000</p>
              <p style={{ color: "#7ab730" }}>Good for cat</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        Vỏ ngoài giòn tan,nhân kem bên trong thơm mềm; Tempations với nhiều
        hương vị hấp dẫn khiến mèo nào cũng mê tít.
        <div className="pt-55">
          <Button variant="contained" disable={false} type="submit">
            {true ? "Add to Cart" : "Out Of Stock"}
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
