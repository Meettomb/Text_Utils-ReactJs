// import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase button wase Clicked." + text)
        let newtext = text.toUpperCase(); 
        setText(newtext);
    }

    const handlelowerclick = ()=>{
        // console.log("Lowercase Button Was clicked" + text)
        let newtext = text.toLowerCase();
        setText(newtext);
    }
  
    const handleSpaceclick = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleclickclick = ()=>{
        let newtext = '';
        setText(newtext);
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }


    const handleSpeackclick = ()=>{
        let speektext = new SpeechSynthesisUtterance()
        speektext.text = text;

        window.speechSynthesis.speak(speektext)
    }

    const handleCopyClick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
            .then(() => {
              props.showAlert("Text copied successfully", "success");
            })
            .catch((error) => {
              console.error('Error copying text:', error);
              props.showAlert("Failed to copy text", "error");
            });
        } else {
        //   console.error('');
          props.showAlert("Clipboard API not available","danger"); 
          // Handle the case where clipboard API is not available
        }
      };

    // const wordsCount = (str)=>{
    //     let word
    //     if(text === ""){
    //         word=0;
    //     }
    //     else{
    //         word = str.trim().split(/\s+/).length;  
    //     }
    //     return word;
    // }

    const [text,setText] = useState("");

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
        <div className="mb-3">
          <textarea type="text" className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} placeholder="Entar your Text hear" onChange={handleOnChange} id="Formybox" rows="10" />
        </div>

        <button disabled={text.length === 0} className="btn btn-primary row m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary row m-2" onClick={handlelowerclick}>To LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary row m-2" onClick={handleSpaceclick}>Remove extra Spase</button>
        <button disabled={text.length === 0} className="btn btn-primary row m-2" onClick={handleSpeackclick}>Speek</button>
        <button disabled={text.length === 0} className="btn btn-primary row m-2" onClick={handleCopyClick}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-danger row m-2" onClick={handleclickclick}>Clear all text</button>
        
        <div className="container my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((elemant)=>{return elemant.length!==0}).length} Words, {text.length} Characters</p>
            <p>Reading Meniut's: <b>{0.008 * text.split("").length}</b></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>

    </div>
  );
}
