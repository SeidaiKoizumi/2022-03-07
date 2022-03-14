import { useState } from "react";

export const Page2 = (props) => {

    const [p2Value, setP2value] = useState(props.p2Data);

    const handleChange = (e) => {
        props.setP2Data(e.target.value)
        setP2value(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number2.svg" alt="画像の解説文" />
            <p>1番にこの活動を選んだ理由を教えてください。<br/>{props.p1Select}</p>
            <textarea  placeholder="About you" value={p2Value} onChange={handleChange}/>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%852.svg" alt="画像の解説文" />
        </div>

    )
}