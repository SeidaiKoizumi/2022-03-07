//import { useForm } from "react-hook-form";
import { useState , useEffect} from "react";
//const { register, handleSubmit, watch, getValues} = useForm()


export const Page3 = (props) => {

    const [val3, setVal3] = useState([]);
    var strConv3 = ""

    useEffect(() => {
        console.log(val3);
        strConv3 = val3.join('、');
        props.setP3Select(strConv3)
        
    }, [val3]);

    const handleChange = (e) => {
        if (val3.includes(e.target.value)) {
            setVal3(val3.filter(item => item !== e.target.value));
        } else {
            setVal3([...val3, e.target.value]);
            
        }
    }

    const handleChange1 = (e) => {
        props.setP3Data1(e.target.checked)
    }

    const handleChange2 = (e) => {
        props.setP3Data2(e.target.checked)
    }

    const handleChange3 = (e) => {
        props.setP3Data3(e.target.checked)
    }

    const handleChange4 = (e) => {
        props.setP3Data4(e.target.checked)
    }

    const handleChange5 = (e) => {
        props.setP3Data5(e.target.checked)
    }

    const handleChange6 = (e) => {
        props.setP3Data6(e.target.checked)
    }



    return (
        <div>
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number3.svg" alt="画像の解説文" />
        
            <div class = "divcheck">
                <p>⾃由になる時間があるとき<br/>あなたが幸せを感じる活動はどれですか？（複数選択可）</p>
                <label><input class = "checkbox" type="checkbox" value="休養・くつろぎ" onChange={(e) => {
                    handleChange(e);
                    handleChange1(e);
                    }}/>休養・くつろぎ</label>
                <p><label><input class = "checkbox" type="checkbox" value="家族・友人等の交流" onChange={(e) => {
                    handleChange(e);
                    handleChange2(e);
                    }}/>家族・友人等の交流</label></p>
                <p><label><input class = "checkbox" type="checkbox" value="社会活動" onChange={(e) => {
                    handleChange(e);
                    handleChange3(e);
                    }}/>社会活動</label></p>
                <p><label><input class = "checkbox"  type="checkbox" value="趣味" onChange={(e) => {
                    handleChange(e);
                    handleChange4(e);
                    }}/>趣味</label></p>
                <p><label><input class = "checkbox"  type="checkbox" value="学習" onChange={(e) => {
                    handleChange(e);
                    handleChange5(e);
                    }}/>学習</label></p>
                <p><label><input class = "checkbox"  type="checkbox" value="その他" onChange={(e) => {
                    handleChange(e);
                    handleChange6(e);
                    }}/>その他</label></p>
            </div>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%853.svg" alt="画像の解説文" />
        </div>
        </div>

    )
}