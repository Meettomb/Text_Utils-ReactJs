// import React, { useState } from "react";

export default function About(props) {
 
  let buttonStyle ={
    backgroundColor: props.mode === 'dark'?'black':'white',
    color: props.mode === 'light'? 'black':'white'

  }

  return (
    <div className="contanier " style={{backgroundColor: props.mode === 'dark'?'transparent':'white', color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="pb-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item my-2"style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={buttonStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              id="aboutButton"
            >
              <strong>Analyze Your text</strong>
              
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item my-2"style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              id="aboutButton"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Analyze Your text Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item my-2"style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
             style={buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              id="aboutButton"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contanier mt-3">
        <button onClick={toggleStyle} className="btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}
