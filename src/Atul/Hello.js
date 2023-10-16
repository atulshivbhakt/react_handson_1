import { useState } from "react";
import Classcompo from "./Classcompo";
import Funccompo from "./Funccompo";
import './Style.css'

function Hello(){
    const [count , Setcount] = useState(false);
    const [count2 , Setcount2] = useState(false);
    return(
        <div>
            <button onClick={()=> Setcount(!count)}>this is function Component</button>
            <button onClick={()=> Setcount2(!count2)}>This is class Component</button>
            {count ? <Funccompo /> : null}
            {count2 ? <Classcompo /> : null}
        </div>
    )
}
export default Hello