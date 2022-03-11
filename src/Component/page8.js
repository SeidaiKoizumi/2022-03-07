import React, { useRef } from "react";
import Likert from "react-likert-scale";

const Page8 = (props) => {

  const likertOptions = {
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
      props.setP8Data1(selectData.value)
    } 
  };

  const likertRef = useRef();
  
  const handleChange = (e) => {
      props.setP8Data2(e.target.value)
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
            <textarea  placeholder="About you" onChange={handleChange}/>
        </div>
        <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%858.svg" alt="画像の解説文" />
    </div>
    
  );
};

export default Page8;