import React from "react";

export default function VC(props) {
let stuffs = if(props.length > 10){
    return (<h1>You're cool</h1>)
}else{
    return(<h1>Get That corn OUT of my face!</h1>)
}
  return <div>{stuffs}</div>;
}
