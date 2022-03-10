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
import Question7 from "./Q7-1";
import {Sample} from "./Sample";
import {Sample2} from "./Sample2";
import {Finish} from "./finished";
 
Amplify.configure(awsExports);

  export function App() {
  const { register, handleSubmit, watch, getValues} = useForm()
  const [data, setData] = useState("");
  const [handle, setHandle] = useState("")
  const [mode, setMode] = useState("new");
  const [editData, setEditData] = useState([])
  const [dynamoData, setDynamoData] = useState([])
  const [nameV, setNameV] = useState("")

  const [likertData1, setLikertData1] = useState("");
  const [sampleData, setSampleData] = useState("");
  const [sampleData2, setSampleData2]= useState("");

  const [status, setStatus] = useState(1)
  
  var date = moment()
  var today = date.format('YYYY-MM-DD');
  var yesterday = date.subtract(1, 'd').format('YYYY-MM-DD')
  // 今後はログインしたユーザーで絞るフィルターを
  const filter_T = {
    registration: {
      'eq': today 
    }
  }
  const filter_Y = {
    registration: {
      'eq': yesterday
      
    }
  } 

  // 初期化の段階で自動実行
  useEffect(() => {
    if (mode=="edit") {
      setNameV(editData.name)
    }
    else{
      console.log("new")
    }
    
  }, [editData]);

  
  const handleClickNext = () => {
    //addNote(data);
    setStatus(status + 1);
    // ここで条件分岐
    if (status == 3) {
      addNote();
    }

  }

  const handleClickBack = () => {
    //addNote(data);
    setStatus(status - 1);

  }

  const handleChange = (event) => {
    setHandle(event.target.value)
  }

  const addNote = async () => {
    console.log("送信します")
    await API.graphql(graphqlOperation(createTodo, { 
      input:{
        name:"name",
        sex:"sex",
        hobby:"hobby",
        text:sampleData,
        work:likertData1,
        registration:today
      }  
    }));  
  }

  

  
  
  
  
  
  
  return (
      <Grid container justify='center' >
      <div class = "main">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      
      <Header />
      {
        status == 1 ? <Sample setSampleData = {setSampleData}/> : 
        status == 2 ? <Question7 setLikertData1 = {setLikertData1}/> : 
        status == 3 ? <Sample2 /> : 
        status == 4 ? <Finish /> : ""
      }
      
      <Grid item xs={10} >
      {
        status != 4 ? <IconButton color="primary" onClick={handleClickNext}><ArrowForward /></IconButton> : ""
      }
      
      
      
      </Grid>
      <Grid item xs={2} >
      {
        status != 1 && status != 4 ? <IconButton color="primary" onClick={handleClickBack}><ArrowBack /></IconButton> : ""
      }
      
      </Grid>
      
      </form>
      </div>
      </Grid>
      
  );
  };

//setSampleData2 = {setSampleData2}