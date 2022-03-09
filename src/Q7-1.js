import React, { useRef } from "react";
import Likert from "react-likert-scale";

const Question7 = (props) => {

  const likertOptions = {
    question: "私は有能である。",
    responses: [
      { value: 1, text: "全くそう思わない" },
      { value: 2, text: "ほとんどそう思わない" },
      { value: 3, text: "あまりそう思わない" },
      { value: 4, text: "どちらともいえない" },
      { value: 5, text: "少しそう思う" },
      { value: 6, text: "かなりそう思う" },
      { value: 7, text: "とてもそう思う" }
    ],  
    onChange: selectData => {
      console.log(selectData);
      props.setLikertData1(selectData.value)
    } 
  };
  const likertRef = useRef();
  return (
    <div>
      <Likert {...likertOptions} ref={likertRef} />
      
      
    </div>
  );
};

export default Question7;