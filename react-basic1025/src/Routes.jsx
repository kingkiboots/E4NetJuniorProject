import React from "react";
import {erRouter as Router ,Route, Routes} from "react-router-dom";
import ItemList from "./project/itemList";
import StateTest from "./state/stateTest";

function RoutesSample() {
    return(
        <Router>
        <Routes>
            <Route path="/stateSample" element={<StateTest />} />
            <Route path="/itemList" element={<ItemList />} />
        </Routes>
        </Router>
    )
}

export default RoutesSample;