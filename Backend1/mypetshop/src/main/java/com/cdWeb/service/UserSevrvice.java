package com.cdWeb.service;

import com.cdWeb.model.User;

public interface UserSevrvice {
    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserEmail(String email) throws Exception;

}
