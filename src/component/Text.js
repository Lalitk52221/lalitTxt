import React, { useState } from 'react'


  
    export default function Text(props){
      const handleupclick=()=>{
       // console.log("uppercase was clicked" + text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert('Uppercase has been enabled',"success");
      }
      const handleLoclick=()=>{
        //console.log("lowercase was clicked" + text)
        let newtext= text.toLowerCase()
        setText(newtext)
        props.showalert('Lowecase has been enabled',"success");
      }
      const handleClclick=()=>{
        console.log("clear was clicked" + text)
        let newtext= ''
        setText(newtext)
      }

      const handlenchange=(event)=>{
        console.log("onchange")
        setText(event.target.value)
      }
      const [text,setText] = useState('');
      //SetText("setnewtext");


  return(
    <>
    <div className="container mb-4"  >
      
          {/* <div className="mb-3 mx-5"> */}
          <h1>{props.heading}</h1>
      <textarea className="form-control" style={props.mode} value={text} onChange={handlenchange} id="mybox" rows="8" ></textarea>
      
      <button type="button" onClick={handleupclick}  className="btn btn-primary mx-1 my-3">Convert to uppercase</button>
      <button type="button" onClick={handleLoclick} className="btn btn-primary mx-1 my-3">Lowercase</button>
      <button type="button" onClick={handleClclick} className="btn btn-primary mx-1 my-3">Clear</button>
          {/* </div> */}
      </div>

    <div className='container'>
      <h1> Your Text Summary </h1>
      <p> {text.split(" ").length} words and {text.length} character
        </p> 
      <p> {0.008 * text.split("").length} minutes to read</p>
      <h1>Preview      </h1>
      <p> {text}</p>
     </div>

    </>
  )
}
