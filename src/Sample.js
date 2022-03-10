import { useForm } from "react-hook-form";

//const { register, handleSubmit, watch, getValues} = useForm()


export const Sample = (props) => {

    const handleChange = (e) => {
        props.setSampleData(e.target.value)
    }

    return (
      <div class = "question">
      <h2>1</h2>
      <p>あなたが幸せと感じる瞬間を教えてください。</p>
      <textarea  placeholder="About you" onChange={handleChange}/>
      
      </div>
    )
}