import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function StateTest(){
    const [count,setCount] = useState(0);
    function change(){
        //count++;
        setCount(count+1);
        // const 했으니깐 직접 변경을 못함
        // 이 함수가 끝나야 렌더링이 된다.
    }
    useEffect(() =>{
        console.log("StateTest useEffect after redering")

        return() => {
            console.log("useEffect useEffect")
        }
    })
    return(
        <div>
            <p> {count} </p>
            <button onClick={() => {
                change();
            }}>state 안쓰면 렌더링이 안되지롱 눌러봐눌러봐눌러봐</button>
        </div>
    )
}

export default StateTest;