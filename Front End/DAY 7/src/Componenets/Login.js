import React,{ useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Login() {
  const [Email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const nav=useNavigate();
  const validate=(e)=>{
    e.preventDefault();
    if(Email.length===0||pass.length===0)
    {
      alert("Enter All fields")
    }
    else{
      nav("/home")
    }
  }


  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  console.log(users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const {  email, password } = formData;

    const userExists = users.some((user) => user.email === email);
    const user = users.find((user) => user.email === email);
    localStorage.setItem("users",JSON.stringify(user));
    console.log(user);
    if (user.password !== password) {
      alert("Invalid password");
      return; 
    }
    if (userExists.password === password) {
      console.log("Login Successful");
      return; 
    }
    navigate('/home');
  };

  return (
    <div>
    <section>
    <div class="imgBx">
        <img alt='img' src="https://w0.peakpx.com/wallpaper/232/987/HD-wallpaper-just-one-more-game-game-gaming-just-more-one-quote-sayings-words.jpg"/>

    </div>
    <div class="contentBx">
        <div class="formBx">
       
            <br></br><h2 id="font">Login</h2>
            <br/>
            <br></br>
            <form>
                <div class="inputBx">
                    <span>Username</span>
                    <input type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}/>
                </div>
               <br></br>
                <div class="inputBx">
                    <input type='submit' onClick={handleLogin} value='Login'/>
                </div>
                </form>
                <div class="inputBx">
                    <p>Don't have an account?<Link to="/">Signup</Link> </p>
                </div>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Login