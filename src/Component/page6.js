import { useForm } from "react-hook-form";

//const { register, handleSubmit, watch, getValues} = useForm()


export const Page6 = (props) => {

    const handleChange = (e) => {
        props.setP6Data(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number6.svg" alt="画像の解説文" />
            <p>あなたの趣味について、くわしく教えてください。<br/>{props.p5Select}</p>
            <textarea  placeholder="About you" onChange={handleChange}/>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%856.svg" alt="画像の解説文" />
        </div>

    )
}