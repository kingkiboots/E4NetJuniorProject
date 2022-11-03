import { Outlet } from "react-router-dom"
import React, { memo } from "react";
import Header from "./Header";
import SideBar from "./NavBar";
import "../css/main.css";
import { Form } from "react-bootstrap";
import Center from "./Center";

const MainLayOut = () => {
    console.log("메인레이아웃 렌더링")
    
    //const path = useLocation();

    //console.log("현재 pathname은 =>",window.location.pathname);
    //console.log("현재 pathname은 =>",path.pathname);

    // const onlyMainCheck = () => {
    //     //let pathName = window.location.pathname;
    //     let pathName = path.pathname;
    //     let hello =  pathName === "/main" || pathName === "/main/";
    //     console.log(hello);
    //     return hello;
    // };

    // useEffect(() => {
    //   console.log("ㅎㅇ");
    //   navigate("chargeCash");
    //   //return();
    // },[])

    return(
    <div>
        <Header />
        <Center>
            <SideBar/>
            <section style={{alignIitems: "center"}} className="m-auto section">
                <article className="m-auto">
                    <Form>
                        <Outlet />
                    </Form>
                </article>
            </section>
        </Center>
    </div>);
}

export default memo(MainLayOut);