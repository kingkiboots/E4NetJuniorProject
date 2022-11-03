import React, {memo} from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "../asset/img/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    console.log("헤더 렌더링")
    return(
        <header>
            <Navbar bg="danger" variant="danger" style={{background:"linear-gradient( to right, white, #d9534f)"}}>
                <Container style={{marginLeft:"26px"}}>
                    <Navbar.Brand  as={Link} to="/main/chargeCash">
                        <img alt="e4net logo"
                        src={Logo}
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <h1 className="h1 text-light" id="mainTitle">머니 충전</h1>
                </Container>
            </Navbar>
        </header>

    );
}

export default memo(Header);