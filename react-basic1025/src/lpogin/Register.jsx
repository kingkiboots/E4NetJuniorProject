import React, { useEffect, memo } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import registerAxios from "../lib/Register_Axios";
import Logo from "../asset/img/logo.png";
import MemberPrevious from "./memberPrevious";
import { Link } from "react-router-dom";
import RegisterFormGroup1 from "./RegisterFormGroup1";


function Register({
btnClick,
btnName,
isClickFilterBtn,
children,
}){
console.log("Register render!");
let ref = useRef(null);
const myIdRef = useRef(null);
const [member, setMember] = useState([
{
    id : '',
    pw : '',
    name:'',
    tel1 : '',
    email :'',
    postcode : '',
    addr : '',
    detailAddr : '',
}
]);
const prevMember = MemberPrevious(member);
console.log("member id -> ",member.id == undefined);
useCallback(()=>{
if(!prevMember) console.log("prevmember id -> ",prevMember.id);
})
useEffect(() => {
document.addEventListener('mousedown', clickModalOutside);
return () => {
    document.removeEventListener('mousedown', clickModalOutside);
};
});

const sliceMember = useCallback(() =>{
let inputId = ref.current.value.toLowerCase();
console.log(inputId);
setMember({
    ...member,    
    [ref.current.name] : ref.current.value,
});
console.log("hello?");
})

const clickModalOutside = (event) => {
console.log(event.target);
if (!myIdRef.current.contains(event.target)) {
    console.log("another click");
    console.log(ref.current.value);
    if(ref.current.value !== "" && member.id !== ref.current.value) {console.log("setMember 실행!"); sliceMember();}
}else{
    console.log("span click!");
}
};

const dupCheck = useCallback(() => {
console.log("아오옹오ㅗㄺid -----------> "+member.id);
if (!prevMember || member.id === prevMember.id){
    console.log(member.id," :::::::::: ",prevMember.id);
    return true;
}else{
    console.log("id -----------> "+member.id);
    console.log("prevmember ---------> "+prevMember.id);
    console.log("악시오스!")
    /*registerAxios.post("/dupCheck",{
    id : id,
    },{"Content-Type": 'application/json'})
    .then(response => {
    console.log(response);
    let res = response.data;
    console.log(res);
    if (res === "0"){
        alert("사용가능한 ID!");
        return true;
    }else{
        alert("이미 존재하는 ID!");
        // 아이디에 focus 줌
        return false;
    }
    }).catch(err =>{ console.log("error!!!! =>",err) })*/
}
}, [prevMember]);


const validateForm = () => {
if ((member.id).length > 0 && (member.pwd).length > 0 && (member.email).length > 0){
    return false;
}else{
    return true;
}
} 

const handleSubmit = (event) => {
    event.preventDefault();
}

return(
<div className="container">
<div className='authentication-wrapper authentication-basic container-p-y'>
<div className="card m-auto">
    <div className="card-body m-auto">
    <picture>
        <source srcSet={Logo} media="all and (min-width: 800px)"/> 
        <img src={Logo}  className="my-4 img" alt="이포넷 로고 이미지" />
    </picture>
        <form className="register-form form" onSubmit={handleSubmit}>
            <RegisterFormGroup1 member={member} setMember={setMember} />
            <div className="row-group">
                <div className="join-row">
                    <h3 className="join-title">
                        <label htmlFor="tel1">휴대폰 번호</label>
                    </h3>
                    <div className="tel-wrap">
                        <select className="form-select" style={{display:'inline', width:"22%"}} 
                        name="tel1" id="tel1"
                        ref={ref} required>
                            <option defaultValue={"010"}>010</option>
                            <option value="070">070</option>
                            <option value="02">02</option>
                            <option value="031">031</option>
                        </select>
                        <span className="mx-1">-</span>
                        <input type="text" className="form-control" style={{display:'inline', width:"22%"}} name="tel2"
                        id="tel2" ref={ref} required/>
                        <span className="mx-1">-</span>
                        <input type="text" className="form-control" style={{display:'inline', width:"22%"}} name="tel3"
                        id="tel3" ref={ref} required/>
                        <span className="mx-1"> </span>
                        <button type="button" className="btn btn-danger" style={{display:'inline', width:"25%"}} 
                        name="telBtn" id="telBtn">인증번호 전송</button>
                    </div>
                    <div className="tel-wrap">
                        <input type="text" className="form-control" 
                        style={{display:'inline', width:"62%", marginTop:"11px"}} 
                        name="telIden" id="telIden" placeholder="받은 인증번호를 입력하세요."/>
                        <span className="mx-1" style={{width:"10%"}}> </span>
                        <button type="button" className="btn btn-danger" style={{display:'inline', width:"34%"}} 
                        name="telBtn" id="telBtn">인증</button>
                    </div>
                    <span className="error_next_box" id="idMsg" style={{ariaLive:"assertive"}}>
                        필수 정보입니다.
                    </span>
                </div>
                <div className="join-row">
                    <h3 className="join-title">
                        <label htmlFor="email1">이메일(선택)</label>
                    </h3>
                    <div className="email-wrap">
                        <input className="form-control" style={{display:'inline', width:"64%"}} name="email1"
                        id="email1"  ref={ref}/>
                        <span className="mx-2">@</span>
                        <input className="form-select" style={{display:'inline', width:"150px"}} name="emailList"
                        list="emailLists" ref={ref} id="emailList"/>
                        <datalist id="emailLists" >
                            <option value="gmail.com"/>
                            <option value="naver.com"/>
                            <option value="daum.net"/>
                            <option value="yahoo.co.kr"/>
                        </datalist>
                    </div>
                </div>
                <div className="join-row">
                    <h3 className="join-title">
                        <label htmlFor="postcode">우편번호</label>
                    </h3>
                    <div className="tel-wrap">
                        <input type="text" className="form-control" disabled={true}
                        style={{display:'inline', width:"72%", marginTop:"11px"}} 
                        name="postcode" id="postcode" placeholder="우편번호를 입력하세요."/>
                        <span className="mx-1" style={{width:"10%"}}> </span>
                        <button type="button" className="btn btn-danger" style={{display:'inline', width:"24%"}} 
                        name="telBtn" id="telBtn">우편번호 검색</button>
                    </div>
                </div>
                <div className="join-row">
                    <h3 className="join-title">
                        <label htmlFor="address">주소</label>
                    </h3>
                    <input type="text" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                    name="address" id="address"
                    ref={ref}
                    onKeyUp={() => {
                        let inputPwd = ref.current.value.toLowerCase();
                        setTimeout(() => {
                            if(inputPwd === ref.current.value.toLowerCase()){
                                setMember({
                                    ...member,    
                                    [ref.current.name] : ref.current.value,
                                });
                            }
                        },600);
                    }}
                    required/>
                </div>
                <div className="join-row">
                    <h3 className="join-title">
                        <label htmlFor="address">상세주소(선택)</label>
                    </h3>
                    <input type="text" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                    name="detailAddr" id="detailAddr" disabled={true}
                    ref={ref}
                    onKeyUp={() => {
                        let inputPwd = ref.current.value.toLowerCase();
                        setTimeout(() => {
                            if(inputPwd === ref.current.value.toLowerCase()){
                                setMember({
                                    ...member,    
                                    [ref.current.name] : ref.current.value,
                                });
                            }
                        },600);
                    }}
                    required/>
                </div>
            </div>
            <div className="button-container my-auto"><Link to={"/"}>
                    <button type="submit" className="loginBtn btn btn-danger btn-lg btn-block mx-auto mt-5 mb-4" 
                    style={{width:'100%'}} 
disabled={((member.id === undefined||member.id.length < 1)||(member.pwd === undefined||member.pwd.length < 1)||
    (member.name === undefined||member.name.length < 1) || (member.postcode === undefined||member.postcode.length < 1)||
    (member.tel1 === undefined||member.tel1.length < 1 )||(member.addr === undefined||member.addr.length < 1 ))}
                    >회원가입</button></Link>
                </div>
        </form>
    </div>
</div>
</div>
</div>
)
}

export default memo(Register);