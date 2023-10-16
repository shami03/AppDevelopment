import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { getItem, setRole, setToken, setemail } from './LocalStorage';
import bcrypt from 'bcryptjs';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };
      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="PLAYER"){
                nav("/user-dashboard");
              }
              
              else if(userType=="ADMIN"){
                nav('/admin-dashboard')
              }
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  return (
    <body id="body">
      <div class="login">
        <div class="outer-container">
          <div class="content-container">
            <br />
            <br />
            <br />
            <br />
            <img alt="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAz1BMVEUPEBLn7O8AAAAWqp4OAAD///8VraHU2NsfHyAIAAAKCw7r8PMWoJUhkIYPDRAdnJIdfHIQIiEVPzwWhHrz+PsdbWcfWVQOAAUWSEPf5ukQT0oihX0VVU0ZMC0RHRzQ292Eh4gSNFQASEKBfX8SFxdZWVmTmptlbm+3yMi0trgaY1xiYWFpaWmmu7oWLC5+iorHyswSJTcSIjk5PT0NABARFSgRGyQcDBBCOjw7MDKlpacADQVZUVIpJydQW1uYrKtFTE0fKCcuMTMULEYQERqZ2v2VAAAHQklEQVRoge2aC3eiyBLHsWjbQEPzEEQ0+BjxReIYJll317lJTPT7f6Zb1RgnmVnvPoTZc8/hn2igAX9Ud1FdXUbTatWqVatWrVq1atWqVev/VrLQz+cyZqQDz/MGqcHYT+Qj2Ou4tqVzznXLdq8HPwsvWRo6nLCFaNPJNOMn0Jnn6ifuSVx3B6xqdNSx+Dd735tv9aJq0ZLpvADTOH/69ClznWM3cKvabo9St+jh9ifv199uJ5PJ7W+/Jtd2cUMhM6pDM586nHMXft+2mm9qbX//6pLt3EoqG3PWUWQbpt/AR/x/vtrqWKciOAupZ52MLZvN4AMa95YMHzykVwKXRkafff31EY0WQTMQb6JtNP3RpBP0Tvlhhg3Iy3gGWqsZNBqi8V64FzRbmqE6JkzLNV0y9Vhz14Bl8yP3xG8ugbnK43plmi5ZmyziNoPpGTTBp8AcdZ5bouUFWrcGEu7OobHbWyCTIsaFpcGjThG4esy8ajbO2t1oPposK2Jst6z4ajh60eMajAJx1/pDdOtOBDOQ0j6OTjlo6ekqZPuRBst4NDtj92wUL0GLusXJJeUzUQ9nyJ6PaM28h/W54Y7XcG9qMvK7GU7vJXU6C7OXxOFtZgI8rc66mmisngBM9Es76bbL8jYW2hnnmXE1f14oTxM/SjUvnuePGP54aIdXpfS5ZH3u9jn3YbYYioYIGnHrR8V4Qw0xXMzA57zv8n4pduPsxTOcobV7+vx4Mb9/vfpRj/e3yxjx8U6j9K2cGU2mmI928QUT7NjhHAAMw/xOhjSwfYeBR0wAg1AX89f08l4nL7eu8QUzIYZPQC3ud04sPcdFEqQLIbaA99mj1+WejvMDJ1ezYSkaa6Dxd/nHyUJSNBtgG+yGwRJsGiNeRlDHZ4a7LuVJy2BxOwctlcgevEcnWRp2/SyF3fxZLMFVzobP5OVsdHEKFiHavXpO1WzBP/Qos3FulRbPIpitGksI0dmueRmeTn1OrpbBtrF4BjkIQ5uHrv+t11loXXus7/gS5ot4CzgA6Gxl9HmEPksx+hpGIp4BDi6mJ4YacEAPB5My50TvyxTD/XzYGAE6Jl5RRlSVmmXTxOjDDUZNw1Q9oUyCWeuudYfeRyEA53ZqicUN+JRbOdbFZPXBbUqFEsOMBYYtZKWKA/Mgfl02t9TCrhO0GiYLEZtGQpmL2yllMjFeaNn5IukhWzzjfKG02wqxA7gLFqeW2SJGN5ceLUxfSlqiRF4n6+HTO1UR+3k9f3par4YimMDrldbAMIst8/XzaojTyRQ9ohd2vNLWhbjYp8+iZA0j9hBFob11s1os1jNRNMXY1BDF8FdQCkDDBc2fQTFlttRcWmRQ1EbHplA29AQfzW6n09tZ6/t8UbSKA6PK0OTcmJnczOez+GO6NJvPb0w6WB2aJI3X2So+Gn68BRGvtq9QecGFeb55WK/QsWigJzTs6Gur9cH0vWqLTVHUcT/vc1gvGmJ5J+JdLO6WQizWkO8/h5mssNwju7b9sB/nGwyewWiLT9Sd2I4CDPObfDx+sJ1eZZZLTAMt78t4vIf7obidYJ6wDCa3YngP+/H4i2dhQllVrQnn7i53NDQ8xwTq/qU5glHz9V7MIM/He83BVCmpznA7ybj7QIZPGwDBDnYBQDwlsx9cHnqOVhmbdWzm6P6X8ZfD4whg9GgWfw5odqI7hp1V6GzM6XV5+Mt4vDGBcget+LPZj38Jea/rVFndwyVp10JXP3zXftg/2FbXSiqtarJziZhK6yqu5hqYEP9Rx8o0rK6oeIKcIciyIyomDW867RBCbURvByLVejxMQx69XXTB7USZfZLEzNxFhZgoMrXVzeg9Y6znuu1BVBx2fUaP4lGXPHPkQccKPZN2sWWnLCyaiv3QoF0vPR62EtalhQv9XrYsYhbV1SxiU8pvWVTqklRKogM6FaAsqvFyz3/7OqFtUIFPVfQvWwYjmzvg23ZbsX2PF2y0Fu3sQ5vrzonNe3S6YluQ4DWDPwf8id2OYZAPKfbnE5sR2+h/YHeiI5tb6prLPF+x/T5KEtu29Y/s9jl2Qte8XM7ukGMptvpm4l2fn2Grqgeee9mMqtge1cUVW7f+KjsN8ezL2ZbRPbJ59sL/Up/jNb5eht0W673Z7Scf2VQQsSL1fGM+9d5uZJdi9xsbZyq0zuppjm13KLZlDENbiItk2/Z8jAIdRgGlfLbWbYeZlyaJl2oyejhQTD9sDvR+iCiKD7xkgEvQfvjW55eyqRMdDJK6nkbs4bCRhzzPN8Y+z/ebwz7f7HMz3+OPucG3jdzQfZRpt962iS1zzE8xPUKIsUe4thkjfm8otkZ7mqbaVUxV13y+jF183aejR5GBCMzxR9sgB1PSzWZjagfcJXae4ivfj6kqRmUwvajBXCL7ODtFBFHE/yk6h7yfQsulCwWpeaTB3ymfSFlcc3ki83f/mUP+g2tq1apVq1atWrVq1apV69/RfwH0CrkuRVhBRwAAAABJRU5ErkJggg==" />
            <h2>WELCOME BACK &#x2764; </h2>
            <form>
              <div>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  type="email"
                  placeholder="Email"
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>
              <div>
                <input
                  onChange={handlePasswordChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
                {formErrors.password && <p className="error">{formErrors.password}</p>}
              </div>
              <button onClick={validate} type="submit">Login</button>
            </form>

            <h3> New To our platform ? Register as</h3><Link id="register" to="/publisher-signup">User! </Link>
          </div>
          
        </div>
      </div>
    </body>
  );
}

export default Login;
