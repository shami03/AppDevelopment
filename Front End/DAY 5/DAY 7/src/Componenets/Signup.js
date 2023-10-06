import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './state/index';


function Signup() {
  const [Email,setEmail]=useState('')
  const [Pass,setPass]=useState('')
  const [conpass,setConpass]=useState('')
  const[name,setName]=useState('')
  const nav=useNavigate();
  const validate=(e)=>{
    e.preventDefault();
    if(Email.length===0||Pass.length===0||conpass.length===0||name.length===0)
    {
      alert("Enter All fields")
    }
    else if(Pass!==conpass)
    {
      alert("Mismatching Password")
    }
    else if(Pass.length<8)
    {
      alert("Password must be greater than 8")
    }
    else{
      nav("/login")
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSignUp = () => {
    const { firstName, lastName, email, password } = formData;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Email already exists. Please use a different email.');
      return; 
    }
    dispatch(
      addUser({
        username: email,
        password, 
      })
    );
    navigate('/login');
  };

  return (
    <div>
    <section>
    <div class="imgBx">
        <img alt='img' src="https://w0.peakpx.com/wallpaper/232/987/HD-wallpaper-just-one-more-game-game-gaming-just-more-one-quote-sayings-words.jpg"/>
    </div>
    <div class="contentBx">
        <div class="formBx">
            <h2 id="font">SignUp</h2>
            <br></br><br/>
            <form>
                <div class="inputBx">
                    <span>First Name</span>
                    <input type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}/>
                </div>
                <div class="inputBx">
                    <span> Last Name</span>
                    <input type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}/>
                </div>
                <div class="inputBx">
                    <span>Email</span>
                    <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}/>
                </div>
               
                <div class="inputBx">
                    <input onClick={handleSignUp}
                    type="button"
                    value="Sign Up"/>
                </div>
                <div class="inputBx">
                    <p>Already have an Account? <Link to="/login">Login</Link>
                    
                    </p>
                </div>
            </form>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Signup