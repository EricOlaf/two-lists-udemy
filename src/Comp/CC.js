import React from "react";

export default function CC(props) {
  let each = props.arr.map((l, ind) => {
    return (
      <p
        key={ind}
        onClick={() => {
          props.del(ind);
        }}
      >
        {l}
      </p>
    );
  });
  return <div>{each}</div>;
}
