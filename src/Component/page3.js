//import { useForm } from "react-hook-form";
import { useState , useEffect} from "react";
//const { register, handleSubmit, watch, getValues} = useForm()


export const Page3 = (props) => {

    /* if (props.p3Data1 == true) {
        console.log("props.p3Data1 == true")
    } */
    
    const [p3Value1, setP3value1] = useState(props.p3Data1);
    const [p3Value2, setP3value2] = useState(props.p3Data2);
    const [p3Value3, setP3value3] = useState(props.p3Data3);
    const [p3Value4, setP3value4] = useState(props.p3Data4);
    const [p3Value5, setP3value5] = useState(props.p3Data5);
    const [p3Value6, setP3value6] = useState(props.p3Data6);

    const [val3, setVal3] = useState([]);
    //var Val3_copy = [...List]
    var strConv3 = ""

    

    useEffect(() => {
        /* if(props.p3Array.length != 0) {
            for(var i=0; i<props.p3Array.length; i++) { 
                setVal3([...val3,props.p3Array[i]]) // 惜しい stateの遅さの問題
            }
        }   */

        setVal3(props.p3Array)
    },[]);

    /* console.log("aaa")
    console.log(props.p3Array)
    console.log("bbb") */

    
    


    useEffect(() => {
        console.log(val3);
        props.setP3Array(val3)

        strConv3 = val3.join('、');
        console.log(strConv3);
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
        setP3value1(e.target.checked)
    }

    const handleChange2 = (e) => {
        props.setP3Data2(e.target.checked)
        setP3value2(e.target.checked)
    }

    const handleChange3 = (e) => {
        props.setP3Data3(e.target.checked)
        setP3value3(e.target.checked)
    }

    const handleChange4 = (e) => {
        props.setP3Data4(e.target.checked)
        setP3value4(e.target.checked)
    }

    const handleChange5 = (e) => {
        props.setP3Data5(e.target.checked)
        setP3value5(e.target.checked)
    }

    const handleChange6 = (e) => {
        props.setP3Data6(e.target.checked)
        setP3value6(e.target.checked)
    }



    return (
        <div>
        <div class = "question">
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/number3.svg" alt="画像の解説文" />
        
            <div class = "divcheck">
                <p>⾃由になる時間があるとき<br/>あなたが幸せを感じる活動はどれですか？（複数選択可）</p>
                <label><input class = "checkbox" type="checkbox" checked={p3Value1} value="休養・くつろぎ" onChange={(e) => {
                    handleChange(e);
                    handleChange1(e);
                    }}/>休養・くつろぎ</label>
                <p><label><input class = "checkbox" type="checkbox" checked={p3Value2} value="家族・友人等の交流" onChange={(e) => {
                    handleChange(e);
                    handleChange2(e);
                    }}/>家族・友人等の交流</label></p>
                <p><label><input class = "checkbox" type="checkbox" checked={p3Value3} value="社会活動" onChange={(e) => {
                    handleChange(e);
                    handleChange3(e);
                    }}/>社会活動</label></p>
                <p><label><input class = "checkbox" type="checkbox" checked={p3Value4} value="趣味" onChange={(e) => {
                    handleChange(e);
                    handleChange4(e);
                    }}/>趣味</label></p>
                <p><label><input class = "checkbox" type="checkbox" checked={p3Value5} value="学習" onChange={(e) => {
                    handleChange(e);
                    handleChange5(e);
                    }}/>学習</label></p>
                <p><label><input class = "checkbox" type="checkbox" checked={p3Value6} value="その他" onChange={(e) => {
                    handleChange(e);
                    handleChange6(e);
                    }}/>その他</label></p>
            </div>
            <img src="https://s3.ap-northeast-1.amazonaws.com/image.png/%E7%82%B9%E3%80%853.svg" alt="画像の解説文" />
        </div>
        </div>

    )
}