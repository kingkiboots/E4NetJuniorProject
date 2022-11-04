function InputVal({validateCheck}){
    function inputValidate(){
        if(validateCheck){
            return;
        }else{
            return(
                <span className="error_next_box" id="idMsg" style={{ariaLive:"assertive"}}>
                    필수 정보입니다.
                </span>
            );
        }
    }

    return(
        <div>
            {inputValidate}
        </div>
    )
}

export default InputVal;