import { useForm } from "react-hook-form";

//const { register, handleSubmit, watch, getValues} = useForm()


export const Page2 = (props) => {

    const handleChange = (e) => {
        props.setP2Data(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number2.svg" alt="画像の解説文" />
            <p>1番にこの活動を選んだ理由を教えてください。<br/>休養（くつろぎ）‧趣味‧学習‧社会活動</p>
            <textarea  placeholder="About you" onChange={handleChange}/>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%852.svg" alt="画像の解説文" />
        </div>

    )
}