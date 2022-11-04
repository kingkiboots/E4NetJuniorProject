import React, {memo} from "react";
import { Routes, Route} from "react-router-dom";
import Login2 from "./lpogin/Login copy";
import Register from "./lpogin/Register";
import Register2 from "./lpogin/Register copy";
import ChargeCash from "./main/ChargeCash";
import PayCash from "./main/PayCash";
import PayHistory from "./main/PayHistory";
import MainLayOut from "./main/MainLayOut";

function ProjectRoute() {
    return(
            <Routes>
                <Route path="/" element={<Login2 />}>로그인</Route>
                <Route path="/register" element={<Register2 />}>회원가입</Route>
                <Route path="/main" element={<MainLayOut />}>
                    <Route path="" element={
                    <div>
                        <h1>안녕하세요!<br/>
                        왼쪽의 메뉴를 선택하세요!</h1>
                    </div>
                }>머니 충전</Route>
                    <Route path="chargeCash" element={<ChargeCash />}>머니 충전</Route>
                    <Route path="payCash" element={<PayCash />}>머니 결제</Route>
                    <Route path="payHistory" element={<PayHistory />} >거래내역</Route>
                </Route>
            </Routes>
    )
}

export default memo(ProjectRoute);