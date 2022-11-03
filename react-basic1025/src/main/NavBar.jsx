import React, {memo} from "react";
import { NavLink } from "react-router-dom";

function SideBar({setTitle}){
    console.log("사이드 바 렌더링");
    const menus = [
        {name : "머니 충전", path: "/main/chargeCash"},
        {name : "머니 결제", path: "/main/payCash"},
        {name : "거래내역", path: "/main/payHistory"},
    ]

    function setHeaderTitle(e){
        let navTitle = e.target.textContent;
        let headerTitle = document.getElementById("mainTitle");
        if(headerTitle.textContent !== navTitle) {
            headerTitle.textContent = navTitle;
        }
    }

    return(
    <nav style={{backgroundColor:"white", width:"15%"}}>
      <ul className="flex-column nav nav-pills"
        style={{alignItems: "center", marginTop:"25px", fontSize:"1.2rem"}}>
          {menus.map((menu, idx) => {
            return(
              <li key={idx} style={{width: "90%", textAlign:"center"}} 
              className="my-1 nav-item">
                <NavLink to={menu.path} key={idx}  style={{width: "90%", textAlign:"center"}} 
                className="my-1 nav-link"
                onClick={ (e) => {
                    setHeaderTitle(e);
                }}>{menu.name}</NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
    )
}

export default memo(SideBar);