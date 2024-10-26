import React from "react";
import memesData from "../memesData.js"

export default function Meme(props){
    const [memeImg , newMemeImg]=React.useState(
        {
            topText:"" , 
            bottomText:"" , 
            randomImg:"",
        }
    )

    const [memechit , newMemeData] = React.useState(memesData)

    //Function used to change the meme when button is clicked
    function showImg(){
        const memesArray = memechit.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // memesArray[randomNumber].url  <-- this line is incomplete!  
        newMemeImg(function(memeImg){
            return {
                ...memeImg , 
                randomImg: memesArray[randomNumber].url,
            }

        })
    }

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
            {memeImg && <img src={memeImg.randomImg} alt="Random Meme" className="memeImg"/>}

        </main>
       
    )

}