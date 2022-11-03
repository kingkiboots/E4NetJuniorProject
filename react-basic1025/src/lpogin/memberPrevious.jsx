import { useRef, useEffect } from "react";

function MemberPrevious(member) {
    const ref = useRef();
    useEffect(() => {
        console.log("prev 렌더링!");
      ref.current = member; //assign the value of ref to the argument
    },[member]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  export default MemberPrevious;