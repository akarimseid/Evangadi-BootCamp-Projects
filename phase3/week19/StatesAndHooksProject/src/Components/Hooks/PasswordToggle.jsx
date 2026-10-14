import { useState } from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

function PasswordToggle() {

  const [showPassword, setShowPassword] = useState(false);


  function togglePassword(){
    setShowPassword(!showPassword);
  }
  return (
    <>
      <input type="text" placeholder="Username" />

      <input type={showPassword ? "text" : "password"} placeholder="password" />

      <button type="button" onClick={togglePassword} aria-label={showPassword ? "Hide password" : "Show password"}>
        {showPassword ? <FaEyeSlash/>: <FaEye/>}
      </button>
    </>
  );
}

export default PasswordToggle;
