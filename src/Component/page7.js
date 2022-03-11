import React, { useRef } from "react";
import Likert from "react-likert-scale";

const Page7 = (props) => {

  const likertOptions1 = {
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
      props.setP7Data1(selectData.value)
    } 
  };

  const likertOptions2 = {
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
      props.setP7Data2(selectData.value)
    } 
  };

  const likertOptions3 = {
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
      props.setP7Data3(selectData.value)
    } 
  };

  const likertOptions4 = {
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
      props.setP7Data4(selectData.value)
    } 
  };

  const likertOptions5 = {
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
      props.setP7Data5(selectData.value)
    } 
  };

  const likertOptions6 = {
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
      props.setP7Data6(selectData.value)
    } 
  };

  const likertOptions7 = {
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
      props.setP7Data7(selectData.value)
    } 
  };

  const likertOptions8 = {
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
      props.setP7Data8(selectData.value)
    } 
  };

  const likertOptions9 = {
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
      props.setP7Data9(selectData.value)
    } 
  };

  const likertOptions10 = {
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
      props.setP7Data10(selectData.value)
    } 
  };

  const likertOptions11 = {
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
      props.setP7Data11(selectData.value)
    } 
  };

  const likertOptions12 = {
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
      props.setP7Data12(selectData.value)
    } 
  };

  const likertOptions13 = {
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
      props.setP7Data13(selectData.value)
    } 
  };

  const likertOptions14 = {
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
      props.setP7Data14(selectData.value)
    } 
  };

  const likertOptions15 = {
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
      props.setP7Data15(selectData.value)
    } 
  };

  const likertOptions16 = {
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
      props.setP7Data16(selectData.value)
    } 
  };

  

  const likertRef = useRef(); // useStateとの違いは値を更新してもコンポーネントの再描写を行いません
  //const likertRef2= useRef();

  return (
    <div class = "scale">
      <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number7.svg" alt="画像の解説文" />
      <p>1.わたしは有能である。</p>    
      <Likert {...likertOptions1} ref={likertRef} />
      <p>2.わたしは社会‧組織の要請に応えている。</p>
      <Likert {...likertOptions2} ref={likertRef} />
      <p>3.わたしのこれまでの⼈⽣は、変化、学習、成⻑に満ちていた。</p>
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
      <Likert {...likertOptions16} ref={likertRef} />
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