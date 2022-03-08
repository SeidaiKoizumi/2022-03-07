
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";
import awsExports from './aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo} from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import moment from 'moment';

 
Amplify.configure(awsExports);

  export function App() {
  const { register, handleSubmit, watch, getValues} = useForm()
  const [data, setData] = useState("");

  //const [handle, setHandle] = useState("")
  const [mode, setMode] = useState("new");
  const [editData, setEditData] = useState([])
  const [dynamoData, setDynamoData] = useState([])

  const [nameV, setNameV] = useState("")
  const [sexV, setSexV] = useState("")
  const [hobbyV, setHobbyV] = useState("")
  const [aboutYouV, setAboutYouV] = useState("")
  const [happinessV, setHappinessV] = useState("")
  
  
  var date = moment()
  var today = date.format('YYYY-MM-DD');
  var yesterday = date.subtract(1, 'd').format('YYYY-MM-DD');
  //var date = moment('2020-01-01');
  //var today_p = Date.parse(today)
  //var date = new Date(today)
  //console.log(today.isAfter(date))
  
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
      
      console.log("edit")
      setNameV(editData.name)
      setSexV(editData.sex)
      setHobbyV(editData.hobby)
      setAboutYouV(editData.text)
      setHappinessV(editData.work)
      console.log(editData.work)
    }
    else{
      console.log("new")
    }
    console.log("useEffectが動いた!")
    
  }, [editData]);

  async function fetchNotes() {
    console.log("fetchNotes")
    const apiData = await API.graphql({ query: listTodos });
    console.log(apiData.data.listTodos.nextToken)
    console.log(apiData.data.listTodos.items)
    console.log("データ取得完了")
    console.log(apiData.data.listTodos.nextToken)
    console.log(apiData.data.listTodos.items)
    //const new_apiData = apiData.data.listTodos.items
    //setDynamoData(new_apiData)
    setDynamoData(apiData.data.listTodos.items) // おそらく、セットし終わるまえに、次のコンソールログが出てしまう
    //console.log(dynamoData)
    const apiData2 = await API.graphql(graphqlOperation(listTodos, { limit: 1 })) // IDでソートされてる一番上から
    console.log(apiData2.data.listTodos.items)
    //const apiData3 = await API.graphql(graphqlOperation(listTodos, { filter: filter }))
    //console.log(apiData3.data.listTodos.items)
    //console.log(dynamoData)
    //console.log(apiData.data.listTdoos.items) //同じなのにできないなぜ
    //setDynamoData(apiData.data.listTdoos.items);
    //console.log(apiData.data.listTodos.items)
  }
  
  async function fetchNotesToday() {
    const apiData_T = await API.graphql(graphqlOperation(listTodos, { filter: filter_T }))
    console.log(apiData_T.data.listTodos.items)
    setDynamoData(apiData_T.data.listTodos.items) 
  }

  async function fetchNotesYesterday() {
    const apiData_Y = await API.graphql(graphqlOperation(listTodos, { filter: filter_Y }))
    console.log(apiData_Y.data.listTodos.items)
    setDynamoData(apiData_Y.data.listTodos.items) 
  }

  const handleClick = () => {
    addNote(data);
    //this.setState({[event.target.name]: '' }); //クリックしたら回答欄が消えるのはいらないかもしれない。次のページに移るため
  }

  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    if (event.target.name == "Name") {
      setNameV(() => event.target.value)
    }
    else if (event.target.name == "sex") {
      setSexV(() => event.target.value)
    }
    else if (event.target.name == "hobby") {
      setHobbyV(() => event.target.value)
    }
    else if (event.target.name == "aboutYou") {
      setAboutYouV(() => event.target.value)
    }
    else if (event.target.name == "Happiness") {
      setHappinessV(() => event.target.value)
    }
    
    
  }

  
  
  const addNote = async (data) => {
    //console.log(note)
    await API.graphql(graphqlOperation(createTodo, { 
      input:{
        name:getValues('Name'),
        sex:getValues('sex'),
        hobby:getValues('hobby'),
        text:getValues('aboutYou'),
        work:getValues('Happiness'),
        registration:today
      }  
    }));  
  }

  const updateNote = async () => {
    console.log("Hey!")
    await API.graphql(graphqlOperation(updateTodo, { 
      input:{
        id:editData.id,
        name:getValues('Name'),
        sex:getValues('sex'),
        hobby:getValues('hobby'),
        text:getValues('aboutYou'),
        work:getValues('Happiness'),
        registration:today
        
      }
    }));
  }

  const changemode = async (dynamo) => {
    setMode("edit");
    console.log(dynamo)
    //editData = dynamo
    setEditData(dynamo)

  }

  
    
  

  const deleteNote = async (dynamo) => {
    const id = {
      id: dynamo.id
    };
    await API.graphql(graphqlOperation(deleteTodo, { input: id }));
    //this.setState({ notes: this.state.notes.filter(item => item.id !== note.id) });
  }


  return (
   <div class = "main">
    {
        mode === "new" ? <h3>----新規モード----</h3> 
          : <h3>----編集モード-----  <button type="button" onClick={() => setMode("new")}>新規入力</button></h3>
    }

    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Header />
      <p>名前</p>
      <input {...register("Name")} placeholder="name" value={nameV} onChange={handleChange}/>
      <p>性別</p>
      <select {...register("sex")} value={sexV} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="A">男性</option>
        <option value="B">女性</option>
      </select>
      <p>趣味</p>
      <select {...register("hobby")} value={hobbyV} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="A">スポーツ・運動</option>
        <option value="B">音楽</option>
        <option value="C">ゲーム</option>
      </select>
      <p>あなたが幸せと感じる瞬間を教えてください。</p>
      <textarea {...register("aboutYou")} placeholder="About you" value={aboutYouV} onChange={handleChange}/>
      <p>仕事は楽しいですか？</p>
      <p>
      <label class = "radio">
        <input class = "radio" {...register("Happiness", { required: true })} 
          type="radio" value={happinessV} onChange={handleChange}/>YES
      </label>
      <label class = "radio">
        <input class = "radio" {...register("Happiness", { required: true })}
          type="radio" value={happinessV} onChange={handleChange} />NO
      </label>
      </p>
      
      {
        mode === "new" ?  <button type="button" onClick={handleClick}>送信</button>
          : <button type="button" onClick={updateNote}>更新</button>
      }
      <hr/>
      <div>
        <button onClick={() => {fetchNotes()}}>データ読み込み</button>
        <button onClick={fetchNotesToday}>今日のデータ</button>
        <button onClick={fetchNotesYesterday}>昨日のデータ</button>
      </div>
      
      

      <div>
        {dynamoData.map((dynamo) => (
          <div key={dynamo.id}>
            <p>名前: {dynamo.name}</p>
            {
              dynamo.sex === 'A' ? <p>性別: 男性</p> : <p>性別: 女性</p>
            }
            {
              dynamo.hobby === 'A' ? <p>趣味: スポーツ・運動</p>
               : dynamo.hobby === 'B' ? <p>趣味: 音楽</p> : <p>趣味: ゲーム</p>
            }
            <p>あなたが幸せと感じる瞬間を教えてください。: {dynamo.text}</p>
            {
              dynamo.work === 1 ? <p>仕事は楽しいですか？: YES</p> : <p>仕事は楽しいですか？: NO</p>
            }
            <p>登録日: {dynamo.registration}</p>
            
            <button onClick={() => {changemode(dynamo)}}>編集</button>
            <button onClick={() => {deleteNote(dynamo)}}>削除</button>
            <hr/>
          </div>
        ))}
      </div>
      
    </form>
    
    
    </div>
  );
  
}

//<p>{dynamoData}</p>

//<button onClick={deleteNote(dynamo)}>削除</button>

/* {
  mode === "edit" ? nameV = editData.name : nameV = ""
} */

// <button onClick={handleClick}>送信</button>

/* <button
        type="button"
        onClick={() => {
          const values = getValues(); // { test: "test-input", test1: "test1-input" }
          const singleValue = getValues("Name"); // "test-input"
          // ["test-input", "test1-input"]
        }}
      >
        Get Values
      </button>

      <p>入力したデータ</p>
      <p>{data}</p>

      <p className="Name-text">名前: {getValues('Name')}</p>
      <p className="sex-text">性別: {getValues('sex')}</p>
      <p className="hobby-text">趣味: {getValues('hobby')}</p>
      <p className="aboutYou-text">幸せ: {getValues('aboutYou')}</p>
      <p className="Happiness-text">仕事: {getValues('Happiness')}</p> */