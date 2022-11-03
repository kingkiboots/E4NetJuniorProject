import { useRef } from "react";

const RegisterFormGroup1 = ({member, setMember}) =>{
    let ref = useRef(null);
    const myIdRef = useRef(null);
    return(
        <div className="row-group">
                        <div className="join-row">
                            <h3 className="join-title">
                                <label htmlFor="id">아이디</label>
                            </h3>
                            <span ref={myIdRef}>
                            <input type="text" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                            name="id" id="id"
                            ref={ref}
                            // onKeyUp={() => {
                            //     let inputId = ref.current.value.toLowerCase();
                            //     setTimeout(() => {
                            //         if(inputId === ref.current.value.toLowerCase()){
                            //             setMember({
                            //                 ...member,    
                            //                 [ref.current.name] : ref.current.value,
                            //             });
                            //         }
                            //     },600);
                            // }}
                            required/>
                            </span>
                            <span className="error_next_box" id="idMsg" style={{ariaLive:"assertive"}}>
                                필수 정보입니다.
                            </span>
                        </div>
                        <div className="join-row">
                            <h3 className="join-title">
                                <label htmlFor="pwd">비밀번호</label>
                            </h3>
                            <input type="password" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                            name="pwd" id="pwd"
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
                                <label htmlFor="pwdCheck">비밀번호 확인</label>
                            </h3>
                            <input type="password" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                            name="pwdCheck" id="pwdCheck"
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
                                <label htmlFor="name">이름</label>
                            </h3>
                            <input type="text" className="form-control mr-3 my-0 lt-6" style={{display:'inline', width:"100%"}} 
                            name="name" id="name"
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
    )
}

export default RegisterFormGroup1;