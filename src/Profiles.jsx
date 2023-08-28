import { useState } from "react";
const Profiles =()=>{
    const [login,setLogin]=useState(false)
    return(
        <div>
        {login ? <h1>Welcome Sonali</h1>:<h1>Welcome Gita</h1> }
        </div>
    )
    
}
export default Profiles;