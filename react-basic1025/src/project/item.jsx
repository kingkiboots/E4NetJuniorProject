import React, { useCallback, memo } from "react";

function Item({user}){
    console.log("item rendering");
    
    const getResult = useCallback((score) =>{
        console.log("뭘봐")
        if(score <= 70){
            return {grade: "D"};
        }else if(score <= 80){
            return {grade: "C"};
        }
        else if(score <= 90){
            return {grade: "B"};
        }else{
            return {grade: "A"};
        }
    }, []);
    
    return(
        <div>
            <div>이름 : {user.name}</div>
            <div>나이 : {user.age}</div>
            <div>점수 : {user.score}</div>
            <div>등급 : {getResult(user.score).grade}</div>
        </div>
    );
}

export default memo(Item);