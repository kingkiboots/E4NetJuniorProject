import React, {memo} from "react";
import { useState } from "react";
import HistoryBoard from "./HitoryBoard";


function PayHistory(){
    console.log("결제이력 렌더링")
    let today = new Date().getDate();
    const [minDate, setMinDate] = useState();
    const [maxDate, setMaxDate] = useState();
    const [payWay, setPayWay] = useState("");
    
    return(

        <div className="inquiry-range m-auto date" style={{width:"90%"}}>
                <div className="form-group">
                    <label>거래기간</label>
                    <input type="date" value={minDate ||""} max={today} onChange={
                        (e) => {
                            setMinDate(e.target.value);
                        }
                    }/>
                    <span className="mx-1"> ~ </span>
                    <input type="date" value={maxDate ||""} max={minDate} className="mr-5"
                    onChange={
                        (e) => {
                            setMaxDate(e.target.value);
                        }}
                    />
                    </div>
                <div className="form-group" style={{justifyContent: "space-around", width:"25%"}}>
                    <label>결제수단</label>
                    <select className="form-select" style={{width:"120px", display:"inline", textAlign:"center"}} value={payWay} onChange={(e) => {
                            console.log("결제 어떻게 도와드릴까여? => ",e.target.value);
                            setPayWay(e.target.value);
                        }} required>
                            <option defaultValue>선택</option>
                            <option value="선불머니">선불머니</option>
                            <option value="카드">카드</option>
                            <option value="계좌이체">계좌이체</option>
                    </select>
                </div>
                    <button type="submit" className="btn btn-outline-danger" 
                    style={{width:"10%"}}>조회</button>
            <br/><br/>
            
            <div className="history-board">
                        <HistoryBoard />
            </div>
        </div>

    );
}

export default memo(PayHistory);