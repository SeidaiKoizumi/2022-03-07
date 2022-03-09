import React, { useRef } from "react";
import Likert from "react-likert-scale";

const Sample = (props) => {

  const likertOptions = {
    question: "今日の幸福度は?",
    responses: [
      { value: 1, text: "とても低い" },
      { value: 2, text: "低い" },
      { value: 3, text: "やや低い" },
      { value: 4, text: "まあまあ" },
      { value: 5, text: "やや高い" },
      { value: 6, text: "高い" },
      { value: 7, text: "とても高い" }
    ],  
    onChange: selectData => {
      console.log(selectData);
      props.setLikertData(selectData.value)
    } 
  };
  const likertRef = useRef();
  return (
    <div>
      <Likert {...likertOptions} ref={likertRef} />
      
      
    </div>
  );
};

export default Sample;