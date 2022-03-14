import { useState } from "react";

export const Page4 = (props) => {

    const [p4Value, setP4value] = useState(props.p4Data);

    const handleChange = (e) => {
        props.setP4Data(e.target.value)
        setP4value(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number4.svg" alt="画像の解説文" />
            <p>あなたが幸せになる活動について、理由や思いを教えてください。<br/>{props.p3Select}</p>
            <textarea  placeholder="happyreason" value={p4Value} onChange={handleChange}/>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%854.svg" alt="画像の解説文" />
        </div>

    )
}