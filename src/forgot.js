import React from "react";
import {useNavigate} from "react-router-dom"
import { Button } from "@mui/material";

export function ForgetPassword() {
    const navigate=useNavigate();
    return (
        
        <div >
                                           
   <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
  
    <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                </div>
                    <Button onClick={() => navigate("/Login")}  className="btn btn-primary btn-user btn-block">
                         Reset Password
                </Button>
             </form>
             </div>
             

                                           
                                            
                                                       
    );
}