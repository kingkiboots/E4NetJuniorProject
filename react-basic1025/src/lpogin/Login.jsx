import React, { useRef, useEffect, useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerAxios from "../lib/Register_Axios";
import LogInRes from "./LogInRes";

//npm install react-bootstrap bootstrap
// index.js에다가  import "bootstrap/dist/css/bootstrap.min.css" 하셈
// http://bootstrapk.com/css/#tables

function Login(){
    const navigate = useNavigate();

    console.log("로그인 렌더링!");

    let idRef = useRef(null);
    let pwdRef = useRef(null);
    const [id, setID] = useState("");
    const [pwd, setPwd] = useState("");
    const [loginCnt, setLoginCnt] = useState(0);
    const [loginStatus, setLoginStatus] = useState(false);
//setCount(count + amount)는 연속으로 두번 한다고 해도 한번빢에 반영이 되지 않는다.
//리액트 배치는 setState 두개를 연속으로 setstate하면 두번 안하고 동시에 수행하기 때문이다!
//근데 콜백함수로 하면 한번에 하나씩 한다.
    function countUp(amount) {
        setLoginCnt(currentCount => {
            return currentCount + amount;
        })
    }

    const letsLogin = useCallback((e) => {
        // if(id.length === 0){
        //     document.getElementsById("id").focus();
        //     return;
        // }else if(pwd.length === 0){
        //     document.getElementsById("pwd").focus();
        //     return;
        // }
        registerAxios.post("/logIn",{
            id: id,
            pwd: pwd, 
        },{"Content-Type": 'application/json'})
        .then( response => {
            setLoginStatus(true);
            navigate("/main/chargeCash");
        }).catch(err => {
            console.log(`Error Occured!!! =>{$err.code}`);
            if (err.code === "ERR_BAD_REQUEST"){
                countUp(1);
            }
        })
    })
    

    return(
        <div className="container">
        <div className='authentication-wrapper authentication-basic container-p-y'>
        <div className="login">
            <div className='card1 mb-4'>
                <div className="card-body" style={{border:'1px black solid', borderRadius:'.5rem'}}>
                    <h2 style={{color:'#f13645'}} className="mx-auto">E4. Pay Service</h2>
                    <p style={{lineHeight:'140px', height:'182.5px', margin:"0px"}}>서비스 이용을 위해서는 로그인이 필요합니다.</p>
                </div>
            </div>
            <div className='card mx-auto mt-3'>
                <div className="card-body p-1">
                    <form className="form">
                        <div className="form-group">
                            <input type="text" className="form-control mx-auto mt-2 mb-3" style={{width:'90%', textAlign:'center'}} 
                            placeholder="ID" name="id" id="id"
                            ref={idRef}
                            onKeyUp={() => {
                                let inputId = idRef.current.value.toLowerCase();
                                setTimeout(() => {
                                    if(inputId === idRef.current.value.toLowerCase()){
                                        setID(inputId);
                                    }
                                },400);
                            }}
                            required/>
                        </div>
                        <div className="form-group my-auto">
                            <input type="password" className="form-control mx-auto my-3 mb-1" style={{width:'90%', textAlign:'center'}} 
                            placeholder="Password" name="pwd" id="id"
                            ref={pwdRef}
                            onKeyUp ={()=> {
                                let inputPwd = pwdRef.current.value.toLowerCase();
                                setTimeout(() => {
                                    if(inputPwd === pwdRef.current.value.toLowerCase()){
                                        setPwd(inputPwd);
                                    }
                                }, 400);
                            }}
                            required/>
                        </div>
                        <LogInRes loginCnt={loginCnt} loginStatus={loginStatus} />
                        <div className="button-container my-auto">
                            <button disabled={!(id.length > 0 && pwd.length > 0)}
                            type="button" className="loginBtn btn btn-danger btn-block mx-auto my-2" 
                            style={{width:'90%'}} onClick={() => {
                                letsLogin();
                            }}>로그인</button>
                        </div>
                    </form>
                    <ul className="find_wrap" style={{listStyle:'none'}}>
                        <li><Link className="find_text" target={'_blank'}>비밀번호 찾기</Link></li>
                        <li><Link className="find_text" target={'_blank'}>아이디 찾기</Link></li>
                        <li><Link className="find_text" to="/register">회원가입</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Login;