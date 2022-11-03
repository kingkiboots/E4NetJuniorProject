import styled from "styled-components";
import {memo} from "react"

const Center = styled.div`
height: 92vh;
display: flex;
flex-direction: row;   
positoin: fixed;
width: 100%;
align-items: stretch;
flex: 1 1 auto;
`

export default memo(Center);