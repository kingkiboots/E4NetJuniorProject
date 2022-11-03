import React,{memo} from "react";

function Button({onClick}){
    console.log("button rendering");
    return(
        <button onClick={onClick}>새 유저 생성</button>
    )
}
export default memo(Button);