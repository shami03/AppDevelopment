<<<<<<< HEAD
package com.iamneo.ecom.service;

import com.iamneo.ecom.dto.request.AuthenticationRequest;
import com.iamneo.ecom.dto.request.RegisterRequest;
import com.iamneo.ecom.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
=======
package com.iamneo.ecom.service;

import com.iamneo.ecom.dto.request.AuthenticationRequest;
import com.iamneo.ecom.dto.request.RegisterRequest;
import com.iamneo.ecom.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
>>>>>>> 88530386508e99c84e4079ae15eb0f84e42bd7c1
