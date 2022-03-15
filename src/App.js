import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import awsExports from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo} from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import moment from 'moment';


import {Page1} from "./Component/page1";
import {Page2} from "./Component/page2";
import {Page3} from "./Component/page3";
import {Page4} from "./Component/page4";
import {Page5} from "./Component/page5";
import {Page6} from "./Component/page6";
import Page7 from "./Component/page7";
import Page8 from "./Component/page8";
import {Finish} from "./Component/page9";

 
Amplify.configure(awsExports);

export function App() {
  const { register, handleSubmit, watch, getValues} = useForm()
  const [data, setData] = useState("");
  const [handle, setHandle] = useState("")
  //const [mode, setMode] = useState("new");
  const [editData, setEditData] = useState([])
  const [dynamoData, setDynamoData] = useState([])
  const [nameV, setNameV] = useState("")

  //const [likertData1, setLikertData1] = useState("");

  const [p1Data1, setP1Data1] = useState(0);
  const [p1Data2, setP1Data2] = useState(0);
  const [p1Data3, setP1Data3] = useState(0);
  const [p2Data, setP2Data] = useState("");
  const [p3Data1, setP3Data1] = useState(false);
  const [p3Data2, setP3Data2] = useState(false);
  const [p3Data3, setP3Data3] = useState(false);
  const [p3Data4, setP3Data4] = useState(false);
  const [p3Data5, setP3Data5] = useState(false);
  const [p3Data6, setP3Data6] = useState(false);
  const [p4Data, setP4Data] = useState("");
  const [p5Data1, setP5Data1] = useState(false);
  const [p5Data2, setP5Data2] = useState(false);
  const [p5Data3, setP5Data3] = useState(false);
  const [p5Data4, setP5Data4] = useState(false);
  const [p5Data5, setP5Data5] = useState(false);
  const [p5Data6, setP5Data6] = useState(false);
  const [p5Data7, setP5Data7] = useState(false);
  const [p5Data8, setP5Data8] = useState(false);
  const [p5Data9, setP5Data9] = useState(false);
  const [p5Data10, setP5Data10] = useState(false);
  const [p6Data, setP6Data] = useState("");
  const [p7Data1, setP7Data1] = useState(0);
  const [p7Data2, setP7Data2] = useState(0);
  const [p7Data3, setP7Data3] = useState(0);
  const [p7Data4, setP7Data4] = useState(0);
  const [p7Data5, setP7Data5] = useState(0);
  const [p7Data6, setP7Data6] = useState(0);
  const [p7Data7, setP7Data7] = useState(0);
  const [p7Data8, setP7Data8] = useState(0);
  const [p7Data9, setP7Data9] = useState(0);
  const [p7Data10, setP7Data10] = useState(0);
  const [p7Data11, setP7Data11] = useState(0);
  const [p7Data12, setP7Data12] = useState(0);
  const [p7Data13, setP7Data13] = useState(0);
  const [p7Data14, setP7Data14] = useState(0);
  const [p7Data15, setP7Data15] = useState(0);
  const [p7Data16, setP7Data16] = useState(0);
  const [p8Data1, setP8Data1] = useState(0);
  const [p8Data2, setP8Data2] = useState("");
  
  const [p1Select,setP1Select] = useState("");
  const [p3Select,setP3Select] = useState("");
  const [p5Select,setP5Select] = useState("");

  const [p3Array,setP3Array] = useState([]);
  const [p5Array,setP5Array] = useState([]);

  const [status, setStatus] = useState(1)
  
  
  

  // 初期化の段階で自動実行
  useEffect(() => {
    console.log(status)
    if (status == 9) {
      addNote();
    }
  }, [status]);

  
  const handleClickNext = () => {

    if(status == 1) {
      if(p1Data1 == 0 || p1Data2 == 0 || p1Data3 == 0) {
        return ""
      }
    }

    if(status == 2 && p2Data == "") {
      return ""
    }

    if(status == 3 && p3Data1 == false && p3Data2 == false && p3Data3 == false && p3Data4 == false 
      && p3Data5 == false && p3Data6 == false ) {
      alert('最低１つは選択してください!');
      return ""
    }

    if(status == 4 && p4Data == "") {
      return ""
    }

    if(status == 5 && p5Data1 == false && p5Data2 == false && p5Data3 == false && p5Data4 == false 
      && p5Data5 == false && p5Data6 == false && p5Data7 == false && p5Data8 == false 
      && p5Data9 == false && p5Data10 == false) {
      alert('最低１つは選択してください!');
      return ""
    }

    if(status == 6 && p6Data == "") {
      return ""
    }

    if(status == 7 ) {
      if( p7Data1 == 0 || p7Data2 == 0 || p7Data3 == 0 || p7Data4 == 0 
        || p7Data5 == 0 || p7Data6 == 0 || p7Data7 == 0 || p7Data8 == 0
        || p7Data9 == 0 || p7Data10 == 0 || p7Data11 == 0 || p7Data12 == 0
        || p7Data13 == 0 || p7Data14 == 0 || p7Data15 == 0 || p7Data16 == 0) {
        alert('回答していない質問があります!');
        return ""
      }
    }
      
    if(status == 8 ) {
      if(p8Data1 == 0){
        alert('回答していない質問があります!!');
        return ""
      }
      if(p8Data2 == "") {
        return ""
      }
    }

    setStatus(status + 1);
    //addNote(data);
  }

  const handleClickBack = () => {
    //addNote(data);
    setStatus(status - 1);

  }

  var date = moment()
  var today = date.format('YYYY-MM-DD');

  const addNote = async () => {
    console.log("送信します")
    await API.graphql(graphqlOperation(createTodo, { 
      input:{
        
        Account_id: "Dummy3",
        Gender: "女性",
        Prefectures: "神奈川県",
        Created_data: today,
        Question_1_1: p1Data1,
        Question_1_2: p1Data2,
        Question_1_3: p1Data3,
        Question_2: p2Data,
        Question_3_1: p3Data1,
        Question_3_2: p3Data2,
        Question_3_3: p3Data3,
        Question_3_4: p3Data4,
        Question_3_5: p3Data5,
        Question_3_6: p3Data6,
        Question_4: p4Data,
        Question_5_1: p5Data1,
        Question_5_2: p5Data2,
        Question_5_3: p5Data3,
        Question_5_4: p5Data4,
        Question_5_5: p5Data5,
        Question_5_6: p5Data6,
        Question_5_7: p5Data7,
        Question_5_8: p5Data8,
        Question_5_9: p5Data9,
        Question_5_10: p5Data10,
        Question_6: p6Data,
        Question_7_1: p7Data1,
        Question_7_2: p7Data2,
        Question_7_3: p7Data3,
        Question_7_4: p7Data4,
        Question_7_5: p7Data5,
        Question_7_6: p7Data6,
        Question_7_7: p7Data7,
        Question_7_8: p7Data8,
        Question_7_9: p7Data9,
        Question_7_10: p7Data10,
        Question_7_11: p7Data11,
        Question_7_12: p7Data12,
        Question_7_13: p7Data13,
        Question_7_14: p7Data14,
        Question_7_15: p7Data15,
        Question_7_16: p7Data16,
        Question_8_1: p8Data1,
        Question_8_2: p8Data2
      }  
    }));  
  }
  
  return (
    <div class = "queries">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Header />
          <body class="smile">
          {
            status == 1 ? <Page1 setP1Select = {setP1Select} 
              p1Data1 = {p1Data1} setP1Data1 = {setP1Data1} 
              p1Data2 = {p1Data2} setP1Data2 = {setP1Data2} 
              p1Data3 = {p1Data3} setP1Data3 = {setP1Data3}/> : 
            status == 2 ? <Page2 p2Data = {p2Data} setP2Data = {setP2Data} p1Select = {p1Select}/> : 
            status == 3 ? <Page3 p3Select = {p3Select} setP3Select = {setP3Select}
              p3Array = {p3Array} setP3Array = {setP3Array}
              p3Data1 = {p3Data1} setP3Data1 = {setP3Data1}
              p3Data2 = {p3Data2} setP3Data2 = {setP3Data2} 
              p3Data3 = {p3Data3} setP3Data3 = {setP3Data3} 
              p3Data4 = {p3Data4} setP3Data4 = {setP3Data4} 
              p3Data5 = {p3Data5} setP3Data5 = {setP3Data5} 
              p3Data6 = {p3Data6} setP3Data6 = {setP3Data6} /> : 
            status == 4 ? <Page4 p4Data = {p4Data} setP4Data = {setP4Data} p3Select = {p3Select}/> : 
            status == 5 ? <Page5 setP5Select = {setP5Select}
              p5Array = {p5Array} setP5Array = {setP5Array}
              p5Data1 = {p5Data1} setP5Data1 = {setP5Data1}
              p5Data2 = {p5Data2} setP5Data2 = {setP5Data2} 
              p5Data3 = {p5Data3} setP5Data3 = {setP5Data3} 
              p5Data4 = {p5Data4} setP5Data4 = {setP5Data4} 
              p5Data5 = {p5Data5} setP5Data5 = {setP5Data5} 
              p5Data6 = {p5Data6} setP5Data6 = {setP5Data6} 
              p5Data7 = {p5Data7} setP5Data7 = {setP5Data7}
              p5Data8 = {p5Data8} setP5Data8 = {setP5Data8}
              p5Data9 = {p5Data9} setP5Data9 = {setP5Data9}
              p5Data10 = {p5Data10} setP5Data10 = {setP5Data10}/> : 
            status == 6 ? <Page6 p6Data = {p6Data} setP6Data = {setP6Data} p5Select = {p5Select}/> :  
            status == 7 ? <Page7 p7Data1 = {p7Data1} setP7Data1 = {setP7Data1} 
              p7Data2 = {p7Data2} setP7Data2 = {setP7Data2} 
              p7Data3 = {p7Data3} setP7Data3 = {setP7Data3}
              p7Data4 = {p7Data4} setP7Data4 = {setP7Data4} 
              p7Data5 = {p7Data5} setP7Data5 = {setP7Data5} 
              p7Data6 = {p7Data6} setP7Data6 = {setP7Data6} 
              p7Data7 = {p7Data7} setP7Data7 = {setP7Data7}
              p7Data8 = {p7Data8} setP7Data8 = {setP7Data8} 
              p7Data9 = {p7Data9} setP7Data9 = {setP7Data9} 
              p7Data10 = {p7Data10} setP7Data10 = {setP7Data10} 
              p7Data11 = {p7Data11} setP7Data11 = {setP7Data11} 
              p7Data12 = {p7Data12} setP7Data12 = {setP7Data12} 
              p7Data13 = {p7Data13} setP7Data13 = {setP7Data13}
              p7Data14 = {p7Data14} setP7Data14 = {setP7Data14} 
              p7Data15 = {p7Data15} setP7Data15 = {setP7Data15} 
              p7Data16 = {p7Data16} setP7Data16 = {setP7Data16}/> : 
            status == 8 ? <Page8 p8Data1 = {p8Data1} setP8Data1 = {setP8Data1} 
              p8Data2 = {p8Data2} setP8Data2 = {setP8Data2}/> : 
            status == 9 ? <Finish /> : ""
          }
            <div class="box">
            {
              status != 9 ? <button class="box_imageRight"  onClick={handleClickNext}><img src="https://s3.ap-northeast-1.amazonaws.com/image.png/arrow.svg" height ="50" width="100" /></button> : ""
            }

            {
              status != 1 && status != 9 ? <button class="box_imageLeft"  onClick={handleClickBack}><img src="https://s3.ap-northeast-1.amazonaws.com/image.png/Larrow.svg" height ="50" width="100" /></button> : ""
            }
            </div>
          </body>
      </form>
    </div>
    
      
  );
};

  // <p>{p3Select}</p>

  /* setP7Data2 = {setP7Data2} setP7Data3 = {setP7Data3}
         setP7Data4 = {setP7Data4} setP7Data5 = {setP7Data5} setP7Data6 = {setP7Data6} setP7Data7 = {setP7Data7}
         setP7Data8 = {setP7Data8} setP7Data9 = {setP7Data9} setP7Data10 = {setP7Data10} 
         setP7Data11 = {setP7Data11} setP7Data12 = {setP7Data12} setP7Data13 = {setP7Data13}
         setP7Data14 = {setP7Data14} setP7Data15 = {setP7Data15} setP7Data16 = {setP7Data16} */

        /*  {
          status != 8 ? <IconButton color="primary" onClick={handleClickNext}><ArrowForward /></IconButton> : ""
        }

        {
          status != 1 && status != 8 ? <IconButton color="primary" onClick={handleClickBack}><ArrowBack /></IconButton> : ""
        } */

        /* // 初期化の段階で自動実行
  useEffect(() => {
    console.log(p3Select)
    
  }, [p3Select]);

  useEffect(() => {
    console.log(p5Select)
    
  }, [p5Select]); */

  // Version: