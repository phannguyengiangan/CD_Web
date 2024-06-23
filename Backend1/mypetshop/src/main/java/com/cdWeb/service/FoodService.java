package com.cdWeb.service;

import com.cdWeb.model.Category;
import com.cdWeb.model.Food;
import com.cdWeb.model.Restaurant;
import com.cdWeb.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {


    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);
    void deleteFood(Long foodId) throws Exception;
    public List<Food> getRestaurantFood(Long restaurantId,
                                        boolean isNonveg,
                                        boolean isVegetarian,
                                        boolean isSeasonal,
                                        String foodCategory);

    public List<Food> searchFood(String keyword);
    public Food findFoodById(Long foodId) throws Exception;
    public Food updateAvailabilityStatus(Long foodId) throws Exception;
}