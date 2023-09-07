import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import { toast } from "react-hot-toast";

function Header() {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
//   console.log(isAuthenticated);

const logoutHandler = async ()=>{
  setLoading(true);
  try{
 const {data} = await axios.get(`${server}/users/logout`, {
    withCredentials:true,
  });
 toast.success(data.message); 
 setIsAuthenticated(false)
 setLoading(false);
}catch(error){
 toast.error(error.response.data.error); 
//  console.log(error);
 setIsAuthenticated(true)
  }
}

  return (
    <nav className="header">
      <div>
        <h2 className="title">Todo App</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">Logout</button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
}

export default Header;
