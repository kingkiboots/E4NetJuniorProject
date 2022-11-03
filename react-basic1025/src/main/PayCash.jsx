import React, { useState, memo } from "react";
import { Table } from "react-bootstrap";


function PayCash(){
    console.log("머니 결제 렌더링")
    const products = {
        강릉정육점: {
            소고기 : 10000,
            돼지고기 : 3000,
            닭고기 : 8000,
            오리고기 : 12000
        },
        소파가구점 : {
            소파 : 120000,
            원목의자 : 10000,
            식탁 : 45000,
            선반 : 2000
        },
        알파문구 : {
            연필 :300,
            펜 : 1000,
            지우개 :5000,
            사인펜:15000
        }
    }
const [branch, setBranch] = useState({});
const [price, setPrice] = useState(0);
const [payWay, setPayWay] = useState("선불머니");

    return(
        <Table striped className="charge-cash-table">
        <tbody>
            <tr style={{borderTop:"0.7px white solid"}}>
                <td>가맹점</td>
                <td>
                    <select className="form-select" value={branch} defaultChecked="none"
                    onChange={(e) => {
                        console.log("점포는 => ",e.target.value);
                        setBranch(
                            products[e.target.value]);
                    }} required>
                        <option>상품을 선택하세요.</option>
                        {Object.keys(products).map((branches) => {
                            return(
                                <option key={branches} value={branches}
                                >{branches}</option>
                            );
                        })} 
                        {/* <option value="강릉정육점">강릉정육점</option>
                        <option value="강릉정육점">소파가구점</option>
                        <option value="알파문구">알파문구</option> */}
                    </select>
                </td>
                <td></td>
            </tr>
            <tr>
                <td>구매물품</td>
                <td style={{width: "230px"}}>
                    <select className="form-select" value={price} onChange={(e) => {
                        console.log("선택 상품는 => ",e.target.value);
                        setPrice(
                            branch[e.target.value]);
                    }} required>
                        <option>상품을 선택하세요.</option>
                        {Object.keys(branch).map((key, idx) => {
                            return(
                                <option key={key} value={key}>{key}</option>
                            );
                        })}
                    </select>
                
                </td>
                <td></td>
            </tr>
            <tr>
                <td>결제금액</td>
                <td>
                    {price} 원
                </td>
                <td></td>
            </tr>
            <tr>
                <td>결제수단</td>
                    <td>
                    <select className="form-select" value={payWay} onChange={(e) => {
                        console.log("결제 어떻게 도와드릴까여? => ",e.target.value);
                        setPayWay(e.target.value);
                    }} required>
                        <option value={"선불머니"}>선불머니</option>
                        <option value={"카드"}>카드</option>
                        <option value={"계좌이체"}>계좌이체</option>
                    </select>
                    </td>
                    <td></td>
                </tr>
            <tr>
                <td colSpan="3" style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-danger">결제하기</button>
                </td>
            </tr>
        </tbody>
    </Table> 
    );
}

export default memo(PayCash);