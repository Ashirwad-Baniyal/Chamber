import {auth,provider} from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import  Cookies from 'universal-cookie'

const cookies = new Cookies()

export const Auth =()=>{
    const signInWithGoogle=async ()=>{
        try{
     const result = await signInWithPopup(auth,provider);
     cookies.set("auth-token",result.user.refreshToken)
    }catch(err){console.error(err);}
}
return (
<div className="flex flex-col items-center justify-center p-4 text-center bg-gray-100">
      <div className="p-8 space-y-4 bg-white rounded-lg shadow-xl">
        <p className="text-xl font-semibold text-gray-800">Sign In with Google To Continue</p>
        <button
          onClick={signInWithGoogle}
          className="px-6 py-3 font-bold text-white transition-colors duration-300 rounded-full shadow-lg bg-[#3b5998] hover:bg-[#2e4a86] focus:outline-none focus:ring-2 focus:ring-[#3b5998] focus:ring-offset-2 cursor-pointer"
        >
          Sign In with Google
        </button>
      </div>
    </div>);
};