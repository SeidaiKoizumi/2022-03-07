import { useForm } from "react-hook-form";
//const { register, handleSubmit, watch, getValues} = useForm()


export const Page1 = (props) => {

    const handleChange1 = (e) => {
        props.setP1Data1(e.target.value)
    }

    const handleChange2 = (e) => {
        props.setP1Data2(e.target.value)
    }

    const handleChange3 = (e) => {
        props.setP1Data3(e.target.value)
    }

    return (
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E5%9B%B31.png" alt="画像の解説文" />
            <p>以下の3つの活動を、あなたが幸せにつながると思う順に番号をつけてください。</p>
            <p>睡眠‧⾷事‧⼊浴‧⾝⽀度</p>
            <select onChange={handleChange1}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <p>仕事‧学業‧家事‧育児</p>
            <select onChange={handleChange2}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <p>休養（くつろぎ）‧趣味‧学習‧社会活動</p>
            <select onChange={handleChange3}>
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%851.svg" alt="画像の解説文" />
        </div>

    )
}
