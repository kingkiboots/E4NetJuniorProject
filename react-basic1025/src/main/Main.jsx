import React, {useState} from "react";
import { erRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./NavBar";
import "../css/main.css";
import ChargeCash from "./ChargeCash";
import { Form } from "react-bootstrap";
import Center from "./Center";



function Main(){
    const [title, setTitle] = useState("머니 충전");

    return(
        <div>
            <Header  title={title}/>
            <Center>
                <SideBar setTitle={setTitle} />
                <section style={{aligIitems: "center"}} className="m-auto section">
                    <article className="m-auto">
                        <Form>
                            <ChargeCash />
                        </Form>
                    </article>
                </section>
            </Center>
        </div>
    );
}

export default Main;