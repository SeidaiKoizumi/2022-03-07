import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import awsExports from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo} from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import moment from 'moment';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import { Grid, IconButton } from '@material-ui/core';
import {ArrowForward, ArrowBack }from '@material-ui/icons';
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

  const [p1Data1, setP1Data1] = useState("");
  const [p1Data2, setP1Data2] = useState("");
  const [p1Data3, setP1Data3] = useState("");
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
  const [p8Data2, setP8Data2] = useState(0);
  
  const [p3Select,setP3Select] = useState(0);
  const [p5Select,setP5Select] = useState("");

  
  

  const [status, setStatus] = useState(1)
  
  
  

  // 初期化の段階で自動実行
  useEffect(() => {
    console.log(status)
    if (status == 9) {
      addNote();
    }
  }, [status]);

  
  const handleClickNext = () => {
    //addNote(data);
    setStatus(status + 1);
  }

  const handleClickBack = () => {
    //addNote(data);
    setStatus(status - 1);

  }

  const addNote = async () => {
    console.log("送信します")
    await API.graphql(graphqlOperation(createTodo, { 
      input:{
        p1_1: p1Data1,
        p1_2: p1Data2,
        p1_3: p1Data3,
        p2: p2Data,
        q3_1: p3Data1,
        q3_2: p3Data2,
        q3_3: p3Data3,
        q3_4: p3Data4,
        q3_5: p3Data5,
        q3_6: p3Data6,
        q4: p4Data,
        q5_1: p5Data1,
        q5_2: p5Data2,
        q5_3: p5Data3,
        q5_4: p5Data4,
        q5_5: p5Data5,
        q5_6: p5Data6,
        q5_7: p5Data7,
        q5_8: p5Data8,
        q5_9: p5Data9,
        q5_10: p5Data10,
        q6: p6Data,
        q7_1: p7Data1,
        q7_2: p7Data2,
        q7_3: p7Data3,
        q7_4: p7Data4,
        q7_5: p7Data5,
        q7_6: p7Data6,
        q7_7: p7Data7,
        q7_8: p7Data8,
        q7_9: p7Data9,
        q7_10: p7Data10,
        q7_11: p7Data11,
        q7_12: p7Data12,
        q7_13: p7Data13,
        q7_14: p7Data14,
        q7_15: p7Data15,
        q7_16: p7Data16,
        q8_1: p8Data1,
        q8_2: p8Data2
      }  
    }));  
  }
  
  return (
    <div class = "main">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Header />
          <body>
          {
            status == 1 ? <Page1 setP1Data1 = {setP1Data1} setP1Data2 = {setP1Data2} setP1Data3 = {setP1Data3}/> : 
            status == 2 ? <Page2 setP2Data = {setP2Data}/> : 
            status == 3 ? <Page3 setP3Select = {setP3Select}
              setP3Data1 = {setP3Data1}
              setP3Data2 = {setP3Data2} 
              setP3Data3 = {setP3Data3} 
              setP3Data4 = {setP3Data4} 
              setP3Data5 = {setP3Data5} 
              setP3Data6 = {setP3Data6} /> : 
            status == 4 ? <Page4 setP4Data = {setP4Data} p3Select = {p3Select}/> : 
            status == 5 ? <Page5 setP5Select = {setP5Select}
              setP5Data1 = {setP5Data1}
              setP5Data2 = {setP5Data2} 
              setP5Data3 = {setP5Data3} 
              setP5Data4 = {setP5Data4} 
              setP5Data5 = {setP5Data5} 
              setP5Data6 = {setP5Data6} 
              setP5Data7 = {setP5Data7}
              setP5Data8 = {setP5Data8}
              setP5Data9 = {setP5Data9}
              setP5Data10 = {setP5Data10}/> : 
            status == 6 ? <Page6 setP6Data = {setP6Data} p5Select = {p5Select}/> :  
            status == 7 ? <Page7 setP7Data1 = {setP7Data1} setP7Data2 = {setP7Data2} setP7Data3 = {setP7Data3}
              setP7Data4 = {setP7Data4} setP7Data5 = {setP7Data5} setP7Data6 = {setP7Data6} setP7Data7 = {setP7Data7}
              setP7Data8 = {setP7Data8} setP7Data9 = {setP7Data9} setP7Data10 = {setP7Data10} 
              setP7Data11 = {setP7Data11} setP7Data12 = {setP7Data12} setP7Data13 = {setP7Data13}
              setP7Data14 = {setP7Data14} setP7Data15 = {setP7Data15} setP7Data16 = {setP7Data16}/> : 
            status == 8 ? <Page8 setP8Data1 = {setP8Data1} setP8Data2 = {setP8Data2}/> : 
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