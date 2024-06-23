package com.cdWeb.repository;

import com.cdWeb.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartReposity extends JpaRepository<Cart,Long> {
    public Cart findByCustomerId(Long userId);
}
