import React, {memo} from "react";

function Average({average}){
    console.log("average rendering");
    return (
        // <div>평균 나이 : {average}</div>
        <div>평균 나이 : {average}</div>
    );
}

export default memo(Average);