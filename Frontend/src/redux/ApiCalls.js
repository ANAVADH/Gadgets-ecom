import { publicRequest,  } from "../requestMethord.js";
import { login } from "./AuthRedux";
export const Signin = async (dispatch, user) => {

  
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(login(res.data));
  } catch (err) {
    
      console.log(err)


    


  }
};