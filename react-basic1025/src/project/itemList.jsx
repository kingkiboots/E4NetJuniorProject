import React, { useCallback, useMemo, memo } from "react";
import { useRef } from "react";
import { useState } from "react";
import Average from "./Average";
import Button from "./Button";
import Item from "./item";

function ItemList() {
    let numberRef = useRef(2);
    let searRef = useRef(null);
    console.log("ItemList component render");
    const [text, setText] = useState("");
    const [users, setUsers] = useState([
        {
            id:0,
            name:"test1",
            age:30,
            score:100
        },
        {
            id:1,
            name:"test2",
            age:27,
            score:75
        },
    ]);

    const addUser = useCallback(() => {
        setUsers([
            ...users,
            {
                id: (numberRef.current += 1),
                name: "test",
                age: 30,
                score: 90
            }
        ]); //users가 변할 때를 감지해서 렌더링함. 아예 없는 건 모든 걸,[]는 한번만 감지하고 않마.
    }, [users]);

    // const getResult = (score) =>{
    //     if(score <= 70){
    //         return {grade: "D"};
    //     }else if(score <= 80){
    //         return {grade: "C"};
    //     }
    //     else if(score <= 90){
    //         return {grade: "B"};
    //     }else{
    //         return {grade: "A"};
    //     }
    // }

    const average = useMemo(() => {
        console.log("average");
        // 누적값
        return users.reduce((acc, cur) => {
            return acc+cur.age / users.length;
        }, 0);
    },[users]);
    // 이렇게 함수 뒤에 () 붙히면 바로 즉시 실행하겠다는 뜻이다!

    return(
        <div>
            <div>
                <input
                    type="text"
                    ref = {searRef}
                    placeholder="아무내용 입력"
                    onKeyUp={() => {
                        let search = searRef.current.value.toLowerCase();
                        setTimeout(() => {
                            if(search === searRef.current.value.toLowerCase()){
                                setText(searRef);
                            }
                        },400);
                    }} />
            </div>
            
            <Average average={average}></Average>

            <Button onClick={addUser}></Button>
            
            {users.map((user, idx) => {
                return (
                    <Item user={user} key={idx}></Item>
                    // <div key={idx}>
                    //     <div>이름 : {user.name}</div>
                    //     <div>나이 : {user.age}</div>
                    //     <div>점수 : {user.score}</div>
                    //     <div>등급 : {getResult(user.score).grade}</div>
                    // </div>
                )
            })}
        </div>
    )
}

export default memo(ItemList);