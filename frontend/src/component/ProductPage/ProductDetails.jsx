import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

import {
  FormControlLabel,
  Divider,
  FormControl,
  RadioGroup,
  Typography,
  Radio,
} from "@mui/material";
import { useRadioGroup } from "@mui/material/RadioGroup";
import { MenuCard } from "./MenuCard";

const categories = [
  "Beauty Pro",
  "CD Lab",
  "Cat's eye",
  "CatsRang",
  "Catsby",
  "Earthborn",
  "Kelly&Co's",
];
const foodTypes = [
  { label: "Tất cả", value: "all" },
  { label: "Pate", value: "pate" },
  { label: "Hạt Khô", value: "nut" },
  { label: "Bánh thưởng", value: "snack" },
  { label: "Cỏ Mèo", value: "catnip" },
  { label: "Sữa", value: "milk" },
];
const menu = [1, 1, 1, 1, 1, 1];

export const ProductDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [categorie, setCategory] = useState("Beauty Pro");
  const handleFilter = (e) => {
    console.log.apply(e.target.value, e.target.name);
  };
  const images = [
    "https://theme.hstatic.net/200000312661/1001217927/14/slide_2_img.jpg?v=153",
    "https://theme.hstatic.net/200000312661/1001217927/14/slide_1_img.jpg?v=153",
    "https://theme.hstatic.net/200000312661/1001217927/14/slide_1_img.jpg?v=153",
  ];
  return (
    <div className="px-5 lg:px-20">
      <section>
        <p
          className="text-2xl font-semibold py-3 pb-10"
          style={{ color: "#256a62" }}
        >
          Danh mục sản phẩm
        </p>
        <div>
          <Slide>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[0]})` }}></div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[1]})` }}></div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[2]})` }}></div>
            </div>
          </Slide>
        </div>
      </section>
      <Divider />
      <section className="pt- [2rem] lg:flex relative">
        <div
          className="space-y-10 lg:w -[20%] filter "
          style={{ color: "#000000" }}
        >
          <div className="box space-y-5 lg:sticky top-28 d">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Loại Sản Phẩm
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Nhãn Hiệu
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="categorie_type"
                  value={categorie}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div
          className="space-y-5 lg:w-[80%] lg:pl-10"
          style={{ color: "#111111" }}
        >
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
