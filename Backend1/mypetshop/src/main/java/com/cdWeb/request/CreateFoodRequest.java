package com.cdWeb.request;

import com.cdWeb.model.Category;
import com.cdWeb.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private  String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long restaurantId;
    private boolean vegetarian;
    private boolean isSeasonal;
    private List<IngredientsItem> ingredients;




}
