import React, {memo} from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";


function ChargeCash(){
    console.log("머니 충전 렌더링")
    let cashBefore = 9000;
    const [chargingCash, setChargingCash] = useState(0);
    return(

        <Table striped className="charge-cash-table">
            <tbody>
                <tr style={{borderTop:"0.7px white solid"}}>
                    <td>머니잔액</td>
                    <td>{cashBefore}원</td>
                    <td></td>
                </tr>
                <tr>
                    <td>머니충전액</td>
                    <td style={{width: "230px"}}>
                    <input className="form-select" name="chargingCashs" 
                                value={chargingCash} onChange={(e) =>{
                                    if(e.target.value.length > 0){
                                        console.log(e.target.value);
                                        let moneyToInt = parseInt(e.target.value);
                                        setChargingCash(moneyToInt);
                                    } else{
                                        e.target.value = 0;
                                    }
                                }}
                                list="chargingCash" id="chargingCashs" style={{width:"60%", display:"inline", marginRight:"7px"}}/>
                                <span> 원</span>
                                <datalist id="chargingCash" >
                                    <option value="5000"/>
                                    <option value="10000"/>
                                    <option value="20000"/>
                                    <option value="50000"/>
                                    <option value="100000"/>
                                </datalist>
                    
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>충전결과 예정액</td>
                    <td>{(cashBefore + chargingCash)}원</td>
                    <td></td>
                </tr>
                <tr></tr>
                <tr>
                    <td colSpan="3" style={{textAlign:"center"}}>
                        <button type="button" className="btn btn-danger">충전하기</button>
                    </td>
                </tr>
            </tbody>
        </Table>

    )
}

export default memo(ChargeCash);