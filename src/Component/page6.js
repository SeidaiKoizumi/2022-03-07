import { useState } from "react";

export const Page6 = (props) => {

    const [p6Value, setP6value] = useState(props.p6Data);

    const handleChange = (e) => {
        props.setP6Data(e.target.value)
        setP6value(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number6.svg" alt="画像の解説文" />
            <p>あなたの趣味について、くわしく教えてください。<br/>{props.p5Select}</p>
            <textarea  placeholder="About you" value={p6Value} onChange={handleChange}/>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%856.svg" alt="画像の解説文" />
        </div>

    )
}