import React from "react";
import { Link } from "react-router-dom";
import avatar from '../../assets/avatar3.png'
import  './username.css'
function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className='glass' >
          <div className="title flex flex-col items-center ">
            <h4 className="text-4xl font-bold">Hello There!!</h4>
            <span className="py-3 text-xl w-2/3 text-center text-gray-500">
              Hey whastaup Hey Hey whastaup
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-3">
              <img  src={avatar} className='profile_image'  alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-4 ">
              <input className="textboxx" type="text" placeholder="UserName" />
              <button className="btn" type="submit">Let's Go</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link className="text-red-500" to={"/register"}>
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
