import axios from "axios";
import {loginStart,loginSuccess,loginFailure} from "./userRedux"


const login=async(dispatch,username,password)=>{
    dispatch(loginStart());
    try {
        const res=await axios.post("http://localhost:5000/api/auth/login",{username,password});
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export  {login};