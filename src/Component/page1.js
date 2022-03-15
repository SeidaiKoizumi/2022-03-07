import { useState, useEffect } from "react";



export const Page1 = (props) => {

    const [p1Value1, setP1value1] = useState(props.p1Data1);
    const [p1Value2, setP1value2] = useState(props.p1Data2);
    const [p1Value3, setP1value3] = useState(props.p1Data3);

    // Page1に遷移したときに初期化
    useEffect(() => {
        console.log("useEffect")
        props.setP1Data1(0)
        props.setP1Data2(0)
        props.setP1Data3(0)
    }, []);

    const handleChange1 = (e) => {
        props.setP1Data1(e.target.value)
        setP1value1(e.target.value)
        if (e.target.value == "1") {
            props.setP1Select("睡眠‧⾷事‧⼊浴‧⾝⽀度")
        }
    }

    const handleChange2 = (e) => {
        props.setP1Data2(e.target.value)
        setP1value2(e.target.value)
        if (e.target.value == "1") {
            props.setP1Select("仕事‧学業‧家事‧育児")
        }
    }

    const handleChange3 = (e) => {
        props.setP1Data3(e.target.value)
        setP1value3(e.target.value)
        if (e.target.value == "1") {
            props.setP1Select("休養（くつろぎ）‧趣味‧学習‧社会活動")
        }
    }
    
    
    
window.addEventListener('DOMContentLoaded', function(e){
  var nodes=document.querySelectorAll('.s');
  Array.prototype.forEach.call(nodes,function(n){
    n.addEventListener('change',function(){
      Array.prototype.forEach.call(nodes,function(n){
        Array.prototype.forEach.call(n.querySelectorAll('option:disabled'),function(n){
          n.disabled=false;
        });
      });
      Array.prototype.map.call(nodes,function(n){
        return n.selectedIndex;
      }).filter(function(idx){
        return idx>0;
      }).forEach(function(idx){
        Array.prototype.forEach.call(nodes,function(n){
          if(n.selectedIndex!==idx) n.querySelectorAll('option')[idx].disabled=true;
        });
      });
    });
  });
});

    return (
        <>
        <div class ="orenge_p1">
        <p style={{ fontSize: 18, lineHeight: 1.3, marginBottom: 0, }}>
        どうもありがとうございました！</p>
        <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0, }}>  
        つづいて、あなたの幸福発⾒のために、<br/>
        あなたのことを少し詳しく教えてください。</p>
        <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0, }}>
        ここで答える内容は他の誰にも知られません。<br/>
        （所要時間 約10分）
        </p>
        </div>

        
        <div class = "question">
            <p class="ft30">初回アンケート</p>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number1.svg" alt="num1" />
            <p class="ft16">以下の3つの活動を、あなたが幸せにつながると<div />思う順に番号をつけてください。</p>
            
            <table>
            <tr>
            <th>
            <select onChange={handleChange1} class="s" required="required">
            <option value="">Select...</option>
            <option value="1" id="1">1</option>
            <option value="2" id="2">2</option>
            <option value="3" id="3">3</option>
            </select></th>
            <th><span>睡眠‧⾷事‧⼊浴‧⾝⽀度</span></th>
            </tr>
            <tr>
            <th>
            <select onChange={handleChange2} class="s" required="required">
            <option value="">Select...</option>
            <option value="1" id="1">1</option>
            <option value="2" id="2">2</option>
            <option value="3" id="3">3</option>
            </select></th>
            <th><span>仕事‧学業‧家事‧育児</span></th>
            </tr>
            <tr>
           <th>
            <select onChange={handleChange3} class="s" required="required">
            <option value="">Select...</option>
            <option value="1" id="1">1</option>
            <option value="2" id="2">2</option>
            <option value="3" id="3">3</option>
            </select></th>
            <th><span>休養（くつろぎ）‧趣味‧学習‧社会活動</span></th>
             </tr>
             </table>
             
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%851.svg" alt="dot1" class="mt50"/>

            
        </div>
        </>

    )
}