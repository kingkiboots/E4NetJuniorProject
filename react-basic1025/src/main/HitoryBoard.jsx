import React, {useState, memo} from "react";
import { Table } from "react-bootstrap";
import BoardPagination from "./Pagination";

function HistoryBoard(){
    console.log("히스토리보드 렌더링")
    let histories = [
        {
            date : "2022.07.06",
            sort : "결제",
            payment: "이체",
            product : "디폴릭 정품 반팔티",
            store : "이랜드",
            price : "11,500",
            status : "오류",
        },
        {
            date : "2022.07.05",
            sort : "결제",
            payment: "머니",
            product : "디폴릭 정품 반팔티",
            store : "이랜드",
            price : "9,800",
            status : "정상",
        },
        {
            date : "2022.07.05",
            sort : "충전",
            payment: "카드",
            product : "-",
            store : "-",
            price : "11,500",
            status : "오류",
        },
        {
            date : "2022.07.03",
            sort : "충전",
            payment: "-",
            product : "-",
            store : "-",
            price : "9,800",
            status : "정상",
        },
    ]
    let boardPerPage = 5;
    const totalPage = (histories.length / 5) + 1;
    const [nowPage, setNowPage] = useState(1);
    
    return(
        <Table className="charge-cash-table">
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>일자</th>
                    <th>처리구분</th>
                    <th>결제수단</th>
                    <th>상품명</th>
                    <th>가맹점명</th>
                    <th>처리금액</th>
                    <th>처리상태</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="7">
                        거래 내역이 없습니다.
                    </td>
                </tr>
                {histories.map((history, idx)=>{
                    return(<tr key={idx}>
                        <td>{history.date}</td>
                        <td>{history.sort}</td>
                        <td>{history.payment}</td>
                        <td>{history.product}</td>
                        <td>{history.store}</td>
                        <td>{history.price} 원</td>
                        <td>{history.status}</td>
                    </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="7" style={{alignItems:"center !important"}}>
                        <BoardPagination />
                    </td>
                </tr>
            </tfoot>
        </Table>
    );
}

export default memo(HistoryBoard);