

function LogInRes({loginCnt, loginStatus}){
    console.log("로그인 결과 렌더링!!!");
    function logInRes() {
        if(loginCnt === 0){
            return;
        }else if(!loginStatus){
            return(
                <span style={{fontSize:"0.8rem", color:"red"}}>
                    아이디나 비밀번호가 정확하지 않습니다!
                </span>
            )
        }
    }
    return (
        <div>
            { logInRes() }
        </div>
    );
}

export default LogInRes;