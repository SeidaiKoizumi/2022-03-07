import { Check } from "@material-ui/icons";
import React, { useState, useRef } from "react";
import Likert from "react-likert-scale";

const Page8 = (props) => {

  const [p8Value2, setP8value2] = useState(props.p8Data2);

  var box8 = new Array(7);

  for(var i=0; i<7; i++) {
    if (props.p8Data1 == i+1) {
        box8[i] = true
    }
    else {
        box8[i] = false
    }
  }

  const likertOptions = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8[1]},
      { value: 3, text: "あまりそう思わない", checked: box8[2]},
      { value: 4, text: "どちらともいえない", checked: box8[3]},
      { value: 5, text: "少しそう思う", checked: box8[4]},
      { value: 6, text: "かなりそう思う", checked: box8[5]},
      { value: 7, text: "とてもそう思う", checked: box8[6]}
    ],  
    onChange: selectData => {
      console.log(selectData);
      props.setP8Data1(selectData.value)
    } 
  };

  const likertRef = useRef();
  
  const handleChange = (e) => {
      props.setP8Data2(e.target.value)
      setP8value2(e.target.value)
  }
    
  return (
    <div> 
        <div class = "scale">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number8.svg" alt="画像の解説文" />
            <p>今のあなたの幸せ度はどのくらいですか?</p>    
            <Likert {...likertOptions} ref={likertRef} />
        </div>
    
        
        <div class = "question">
            <p>あなたが幸せに感じる瞬間とはどのようなときですか？</p>
            <textarea  placeholder="About you" value={p8Value2} onChange={handleChange}/>
        

          <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%858.svg" alt="画像の解説文" />

        </div>
    </div>
    
  );
};

export default Page8;