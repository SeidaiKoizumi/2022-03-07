import React, { useState, useRef } from "react";
import Likert from "react-likert-scale";

const Page7 = (props) => {

  var box8_1 = new Array(7);
  var box8_2 = new Array(7);
  var box8_3 = new Array(7);
  var box8_4 = new Array(7);
  var box8_5 = new Array(7);
  var box8_6 = new Array(7);
  var box8_7 = new Array(7);
  var box8_8 = new Array(7);
  var box8_9 = new Array(7);
  var box8_10 = new Array(7);
  var box8_11 = new Array(7);
  var box8_12 = new Array(7);
  var box8_13 = new Array(7);
  var box8_14 = new Array(7);
  var box8_15 = new Array(7);
  var box8_16 = new Array(7);


  for(var i=0; i<7; i++) {
    if (props.p7Data1 == i+1) {
        box8_1[i] = true
    }
    else {
        box8_1[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data2 == i+1) {
        box8_2[i] = true
    }
    else {
        box8_2[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data3 == i+1) {
        box8_3[i] = true
    }
    else {
        box8_3[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data4 == i+1) {
        box8_4[i] = true
    }
    else {
        box8_4[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data5 == i+1) {
        box8_5[i] = true
    }
    else {
        box8_5[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data6 == i+1) {
        box8_6[i] = true
    }
    else {
        box8_6[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data7 == i+1) {
        box8_7[i] = true
    }
    else {
        box8_7[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data8 == i+1) {
        box8_8[i] = true
    }
    else {
        box8_8[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data9 == i+1) {
        box8_9[i] = true
    }
    else {
        box8_9[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data1 == i+1) {
        box8_10[i] = true
    }
    else {
        box8_10[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data11 == i+1) {
        box8_11[i] = true
    }
    else {
        box8_11[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data12 == i+1) {
        box8_12[i] = true
    }
    else {
        box8_12[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data13 == i+1) {
        box8_13[i] = true
    }
    else {
        box8_13[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data14 == i+1) {
        box8_14[i] = true
    }
    else {
        box8_14[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data15 == i+1) {
        box8_15[i] = true
    }
    else {
        box8_15[i] = false
    }
  }

  for(var i=0; i<7; i++) {
    if (props.p7Data16 == i+1) {
        box8_16[i] = true
    }
    else {
        box8_16[i] = false
    }
  }

  
  const likertOptions1 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_1[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_1[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_1[2]},
      { value: 4, text: "どちらともいえない", checked: box8_1[3]},
      { value: 5, text: "少しそう思う", checked: box8_1[4]},
      { value: 6, text: "かなりそう思う", checked: box8_1[5]},
      { value: 7, text: "とてもそう思う", checked: box8_1[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions1")
      props.setP7Data1(selectData.value)
    } 
  };

  const likertOptions2 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_2[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_2[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_2[2]},
      { value: 4, text: "どちらともいえない", checked: box8_2[3]},
      { value: 5, text: "少しそう思う", checked: box8_2[4]},
      { value: 6, text: "かなりそう思う", checked: box8_2[5]},
      { value: 7, text: "とてもそう思う", checked: box8_2[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions2")
      props.setP7Data2(selectData.value)
    } 
  };

  const likertOptions3 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_3[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_3[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_3[2]},
      { value: 4, text: "どちらともいえない", checked: box8_3[3]},
      { value: 5, text: "少しそう思う", checked: box8_3[4]},
      { value: 6, text: "かなりそう思う", checked: box8_3[5]},
      { value: 7, text: "とてもそう思う", checked: box8_3[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions3")
      props.setP7Data3(selectData.value)
    } 
  };

  const likertOptions4 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_4[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_4[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_4[2]},
      { value: 4, text: "どちらともいえない", checked: box8_4[3]},
      { value: 5, text: "少しそう思う", checked: box8_4[4]},
      { value: 6, text: "かなりそう思う", checked: box8_4[5]},
      { value: 7, text: "とてもそう思う", checked: box8_4[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions4")
      props.setP7Data4(selectData.value)
    } 
  };

  const likertOptions5 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_5[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_5[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_5[2]},
      { value: 4, text: "どちらともいえない", checked: box8_5[3]},
      { value: 5, text: "少しそう思う", checked: box8_5[4]},
      { value: 6, text: "かなりそう思う", checked: box8_5[5]},
      { value: 7, text: "とてもそう思う", checked: box8_5[6]}
    ],  
    onChange: selectData5 => {
      console.log("likertOptions5")
      props.setP7Data5(selectData5.value)
    } 
  };

  const likertOptions6 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_6[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_6[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_6[2]},
      { value: 4, text: "どちらともいえない", checked: box8_6[3]},
      { value: 5, text: "少しそう思う", checked: box8_6[4]},
      { value: 6, text: "かなりそう思う", checked: box8_6[5]},
      { value: 7, text: "とてもそう思う", checked: box8_6[6]}
    ],  
    onChange: selectData6 => {
      console.log("likertOptions6")
      props.setP7Data6(selectData6.value)
    } 
  };

  const likertOptions7 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_7[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_7[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_7[2]},
      { value: 4, text: "どちらともいえない", checked: box8_7[3]},
      { value: 5, text: "少しそう思う", checked: box8_7[4]},
      { value: 6, text: "かなりそう思う", checked: box8_7[5]},
      { value: 7, text: "とてもそう思う", checked: box8_7[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions7")
      props.setP7Data7(selectData.value)
    } 
  };

  const likertOptions8 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_8[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_8[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_8[2]},
      { value: 4, text: "どちらともいえない", checked: box8_8[3]},
      { value: 5, text: "少しそう思う", checked: box8_8[4]},
      { value: 6, text: "かなりそう思う", checked: box8_8[5]},
      { value: 7, text: "とてもそう思う", checked: box8_8[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions8")
      props.setP7Data8(selectData.value)
    } 
  };

  const likertOptions9 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_9[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_9[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_9[2]},
      { value: 4, text: "どちらともいえない", checked: box8_9[3]},
      { value: 5, text: "少しそう思う", checked: box8_9[4]},
      { value: 6, text: "かなりそう思う", checked: box8_9[5]},
      { value: 7, text: "とてもそう思う", checked: box8_9[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions9")
      props.setP7Data9(selectData.value)
    } 
  };

  const likertOptions10 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_10[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_10[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_10[2]},
      { value: 4, text: "どちらともいえない", checked: box8_10[3]},
      { value: 5, text: "少しそう思う", checked: box8_10[4]},
      { value: 6, text: "かなりそう思う", checked: box8_10[5]},
      { value: 7, text: "とてもそう思う", checked: box8_10[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions10")
      props.setP7Data10(selectData.value)
    } 
  };

  const likertOptions11 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_11[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_11[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_11[2]},
      { value: 4, text: "どちらともいえない", checked: box8_11[3]},
      { value: 5, text: "少しそう思う", checked: box8_11[4]},
      { value: 6, text: "かなりそう思う", checked: box8_11[5]},
      { value: 7, text: "とてもそう思う", checked: box8_11[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions11")
      props.setP7Data11(selectData.value)
    } 
  };

  const likertOptions12 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_12[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_12[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_12[2]},
      { value: 4, text: "どちらともいえない", checked: box8_12[3]},
      { value: 5, text: "少しそう思う", checked: box8_12[4]},
      { value: 6, text: "かなりそう思う", checked: box8_12[5]},
      { value: 7, text: "とてもそう思う", checked: box8_12[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions12")
      props.setP7Data12(selectData.value)
    } 
  };

  const likertOptions13 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_13[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_13[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_13[2]},
      { value: 4, text: "どちらともいえない", checked: box8_13[3]},
      { value: 5, text: "少しそう思う", checked: box8_13[4]},
      { value: 6, text: "かなりそう思う", checked: box8_13[5]},
      { value: 7, text: "とてもそう思う", checked: box8_13[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions13")
      props.setP7Data13(selectData.value)
    } 
  };

  const likertOptions14 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_14[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_14[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_14[2]},
      { value: 4, text: "どちらともいえない", checked: box8_14[3]},
      { value: 5, text: "少しそう思う", checked: box8_14[4]},
      { value: 6, text: "かなりそう思う", checked: box8_14[5]},
      { value: 7, text: "とてもそう思う", checked: box8_14[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions14")
      props.setP7Data14(selectData.value)
    } 
  };

  const likertOptions15 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_15[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_15[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_15[2]},
      { value: 4, text: "どちらともいえない", checked: box8_15[3]},
      { value: 5, text: "少しそう思う", checked: box8_15[4]},
      { value: 6, text: "かなりそう思う", checked: box8_15[5]},
      { value: 7, text: "とてもそう思う", checked: box8_15[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions15")
      props.setP7Data15(selectData.value)
    } 
  };

  const likertOptions16 = {
    responses: [
      { value: 1, text: "全くそう思わない", checked: box8_16[0]},
      { value: 2, text: "ほとんどそう思わない", checked: box8_16[1]},
      { value: 3, text: "あまりそう思わない", checked: box8_16[2]},
      { value: 4, text: "どちらともいえない", checked: box8_16[3]},
      { value: 5, text: "少しそう思う", checked: box8_16[4]},
      { value: 6, text: "かなりそう思う", checked: box8_16[5]},
      { value: 7, text: "とてもそう思う", checked: box8_16[6]}
    ],  
    onChange: selectData => {
      console.log("likertOptions16")
      props.setP7Data16(selectData.value)
    } 
  };

  

  const likertRef1 = useRef(); // useStateとの違いは値を更新してもコンポーネントの再描写を行いません
  const likertRef2= useRef();
  const likertRef3= useRef();
  const likertRef4= useRef();
  const likertRef5= useRef();
  const likertRef6= useRef();
  const likertRef7= useRef();
  const likertRef8= useRef();
  const likertRef9 = useRef();
  const likertRef10 = useRef();
  const likertRef11 = useRef();
  const likertRef12 = useRef();
  const likertRef13 = useRef();
  const likertRef14 = useRef();
  const likertRef15 = useRef();
  const likertRef16 = useRef();

  return (
    <div class = "scale">
      <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number7.svg" alt="画像の解説文" />
      <p>1.わたしは有能である。</p>    
      <Likert {...likertOptions1} ref={likertRef1} id="1"/>
      <p>2.わたしは社会‧組織の要請に応えている。</p>
      <Likert {...likertOptions2} ref={likertRef2} id="2"/>
      <p>3.わたしのこれまでの⼈⽣は、変化、学習、成⻑に満ちていた。</p>
      <Likert {...likertOptions3} ref={likertRef3} id="3"/>
      <p>4.わたしは社会‧組織の要請に応えている。</p>
      <Likert {...likertOptions4} ref={likertRef4} id="4"/>          
      <p>5.⼈の喜ぶ顔が⾒たい。</p>
      <Likert {...likertOptions5} ref={likertRef5} id="5"/>
      <p>6.わたしを⼤切に思ってくれる⼈たちがいる。</p>
      <Likert {...likertOptions6} ref={likertRef6} id="6"/>            
      <p>7.わたしは⼈⽣において感謝することがたくさんある。</p>
      <Likert {...likertOptions7} ref={likertRef7} id="7"/>
      <p>8.わたしは⽇々の⽣活において、他者に親切にし、⼿助けしたいと思っている。</p>
      <Likert {...likertOptions8} ref={likertRef8} id="8"/>            
      <p>9.わたしはものごとが思い通りにいくと思う。</p>
      <Likert {...likertOptions9} ref={likertRef9} id="9"/>
      <p>10.わたしは学校や仕事での失敗や不安な感情をあまり引きずらない。</p>
      <Likert {...likertOptions10} ref={likertRef10} id="10"/>
      <p>11.わたしは他者との近しい関係を維持することができる。</p>
      <Likert {...likertOptions11} ref={likertRef11} id="11"/>            
      <p>12.わたしは⼈⽣で多くのことを達成してきた。</p>
      <Likert {...likertOptions12} ref={likertRef12} id="12"/>
      <p>13.わたしは⾃分と他者がすることをあまり⽐較しない。</p>
      <Likert {...likertOptions13} ref={likertRef13} id="13"/>            
      <p>14.わたしに何ができて何ができないかは外部の制約のせいではない。</p>
      <Likert {...likertOptions14} ref={likertRef14} id="14"/>
      <p>15.⾃分⾃⾝についての信念はあまり変化しない。</p>
      <Likert {...likertOptions15} ref={likertRef15} id="15"/>            
      <p>16.テレビを⾒るとき、チャンネルをあまり頻繁に切り替え過ぎない。</p>
      <Likert {...likertOptions16} ref={likertRef16} id="16"/>  
      
      <div class = "question">
          <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%857.svg" alt="画像の解説文" />
      </div>

    </div>
  );
};

export default Page7;


{/* <p>3.わたしのこれまでの⼈⽣は、変化、学習、成⻑に満ちていた。</p>
      <Likert {...likertOptions3} ref={likertRef} />
      <p>4.わたしは社会‧組織の要請に応えている。</p>
      <Likert {...likertOptions4} ref={likertRef} />            
      <p>5.⼈の喜ぶ顔が⾒たい。</p>
      <Likert {...likertOptions5} ref={likertRef} />
      <p>6.わたしを⼤切に思ってくれる⼈たちがいる。</p>
      <Likert {...likertOptions6} ref={likertRef} />            
      <p>7.わたしは⼈⽣において感謝することがたくさんある。</p>
      <Likert {...likertOptions7} ref={likertRef} />
      <p>8.わたしは⽇々の⽣活において、他者に親切にし、⼿助けしたいと思っている。</p>
      <Likert {...likertOptions8} ref={likertRef} />            
      <p>9.わたしはものごとが思い通りにいくと思う。</p>
      <Likert {...likertOptions9} ref={likertRef} />
      <p>10.わたしは学校や仕事での失敗や不安な感情をあまり引きずらない。</p>
      <Likert {...likertOptions10} ref={likertRef} />
      <p>11.わたしは他者との近しい関係を維持することができる。</p>
      <Likert {...likertOptions11} ref={likertRef} />            
      <p>12.わたしは⼈⽣で多くのことを達成してきた。</p>
      <Likert {...likertOptions12} ref={likertRef} />
      <p>13.わたしは⾃分と他者がすることをあまり⽐較しない。</p>
      <Likert {...likertOptions13} ref={likertRef} />            
      <p>14.わたしに何ができて何ができないかは外部の制約のせいではない。</p>
      <Likert {...likertOptions14} ref={likertRef} />
      <p>15.⾃分⾃⾝についての信念はあまり変化しない。</p>
      <Likert {...likertOptions15} ref={likertRef} />            
      <p>16.テレビを⾒るとき、チャンネルをあまり頻繁に切り替え過ぎない。</p>
      <Likert {...likertOptions16} ref={likertRef} /> */}