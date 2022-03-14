import { useState } from "react";

export const Page1 = (props) => {

    const [p1Value1, setP1value1] = useState(props.p1Data1);
    const [p1Value2, setP1value2] = useState(props.p1Data2);
    const [p1Value3, setP1value3] = useState(props.p1Data3);

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

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E5%9B%B31.png" alt="画像の解説文" />
            <p>以下の3つの活動を、あなたが幸せにつながると思う順に番号をつけてください。</p>
            <p>睡眠‧⾷事‧⼊浴‧⾝⽀度</p>
            <select value={p1Value1} onChange={handleChange1}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <p>仕事‧学業‧家事‧育児</p>
            <select value={p1Value2} onChange={handleChange2}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <p>休養（くつろぎ）‧趣味‧学習‧社会活動</p>
            <select value={p1Value3} onChange={handleChange3}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%851.svg" alt="画像の解説文" />
        </div>

    )
}
