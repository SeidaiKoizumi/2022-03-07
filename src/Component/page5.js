//import { useForm } from "react-hook-form";
import { useState , useEffect} from "react";
//const { register, handleSubmit, watch, getValues} = useForm()


export const Page5 = (props) => {

    const [p5Value1, setP5value1] = useState(props.p5Data1);
    const [p5Value2, setP5value2] = useState(props.p5Data2);
    const [p5Value3, setP5value3] = useState(props.p5Data3);
    const [p5Value4, setP5value4] = useState(props.p5Data4);
    const [p5Value5, setP5value5] = useState(props.p5Data5);
    const [p5Value6, setP5value6] = useState(props.p5Data6);
    const [p5Value7, setP5value7] = useState(props.p5Data7);
    const [p5Value8, setP5value8] = useState(props.p5Data8);
    const [p5Value9, setP5value9] = useState(props.p5Data9);
    const [p5Value10, setP5value10] = useState(props.p5Data10);

    const [val5, setVal5] = useState([]);
    var strConv5 = ""

    useEffect(() => {
        setVal5(props.p5Array)
    },[]);

    useEffect(() => {
        console.log(val5);
        props.setP5Array(val5)

        console.log(val5);
        strConv5 = val5.join('、');
        props.setP5Select(strConv5)
        
    }, [val5]);

    const handleChange = (e) => {
        if (val5.includes(e.target.value)) {
            setVal5(val5.filter(item => item !== e.target.value));
        } else {
            setVal5([...val5, e.target.value]);
            
        }
    }

    const handleChange1 = (e) => {
        props.setP5Data1(e.target.checked)
        setP5value1(e.target.checked)
    }

    const handleChange2 = (e) => {
        props.setP5Data2(e.target.checked)
        setP5value2(e.target.checked)
    }

    const handleChange3 = (e) => {
        props.setP5Data3(e.target.checked)
        setP5value3(e.target.checked)
    }

    const handleChange4 = (e) => {
        props.setP5Data4(e.target.checked)
        setP5value4(e.target.checked)
    }

    const handleChange5 = (e) => {
        props.setP5Data5(e.target.checked)
        setP5value5(e.target.checked)
    }

    const handleChange6 = (e) => {
        props.setP5Data6(e.target.checked)
        setP5value6(e.target.checked)
    }

    const handleChange7 = (e) => {
        props.setP5Data7(e.target.checked)
        setP5value7(e.target.checked)
    }

    const handleChange8 = (e) => {
        props.setP5Data8(e.target.checked)
        setP5value8(e.target.checked)
    }

    const handleChange9 = (e) => {
        props.setP5Data9(e.target.checked)
        setP5value9(e.target.checked)
    }

    const handleChange10 = (e) => {
        props.setP5Data10(e.target.checked)
        setP5value10(e.target.checked)
    }

    return (
        <div>
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number5.svg" alt="画像の解説文" />
        
            <div class = "divcheck">
                <p>あなたの趣味はなんですか（複数選択可）</p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value1} value="スポーツ‧運動" onChange={(e) => {
                    handleChange(e);
                    handleChange1(e);
                    }}/>スポーツ‧運動</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value2} value="⾳楽‧映画‧美術‧芸術鑑賞" onChange={(e) => {
                    handleChange(e);
                    handleChange2(e);
                    }}/>⾳楽‧映画‧美術‧芸術鑑賞</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value3} value="テレビ視聴‧観戦" onChange={(e) => {
                    handleChange(e);
                    handleChange3(e);
                    }}/>テレビ視聴‧観戦</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value4} value="創作活動" onChange={(e) => {
                    handleChange(e);
                    handleChange4(e);
                    }}/>創作活動</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value5} value="旅‧アウトドア" onChange={(e) => {
                    handleChange(e);
                    handleChange5(e);
                    }}/>旅‧アウトドア</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value6} value="ゲーム" onChange={(e) => {
                    handleChange(e);
                    handleChange6(e);
                    }}/>ゲーム</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value7} value="稼ぐ" onChange={(e) => {
                    handleChange(e);
                    handleChange7(e);
                    }}/>稼ぐ</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value8} value="集める" onChange={(e) => {
                    handleChange(e);
                    handleChange8(e);
                    }}/>集める</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value9} value="育てる" onChange={(e) => {
                    handleChange(e);
                    handleChange9(e);
                    }}/>育てる</label></p>
                <p><label><input class = "checkbox"  type="checkbox" checked={p5Value10} value="その他" onChange={(e) => {
                    handleChange(e);
                    handleChange10(e);
                    }}/>その他</label></p>
            </div>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%855.svg" alt="画像の解説文" />
        </div>
        </div>

    )
}