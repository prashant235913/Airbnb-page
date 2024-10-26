import React from "react";
import memesData from "../memesData.js"

export default function Meme(props){
    const [memeImg , newMemeImg]=React.useState()
    return(
        <main>
        <div className="form">
                  <input 
                        type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button onClick={showImg}
                    className="form-button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {memeImg && <img src={memeImg} alt="Random Meme" className="memeImg"/>}

        </main>
       
    )
    function showImg(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!  
        newMemeImg(function(memeImg){
            return memesArray[randomNumber].url
        })
    }
}