<<<<<<< HEAD
package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.request.UserRequest;
import com.iamneo.ecom.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
=======
package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.request.UserRequest;
import com.iamneo.ecom.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
>>>>>>> 88530386508e99c84e4079ae15eb0f84e42bd7c1
