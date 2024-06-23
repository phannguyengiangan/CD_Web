package com.cdWeb.service;

import com.cdWeb.model.Cart;
import com.cdWeb.model.CartItem;
import com.cdWeb.model.User;
import com.cdWeb.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;


    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    public Long calculateCartToTal(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public  Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;
}

