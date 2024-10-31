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

    function handleChange(event){
        const {name , value} = event.target
        newMemeImg(function(memeImg){
            return (
                {
                    ...memeImg , 
                    [name]:value,
                }
            )
        })
    }

    return(
        <main>
        <div className="form">
                  <input 
                        type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImg.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={memeImg.bottomText}
                    onChange={handleChange}
                />
                <button onClick={showImg}
                    className="form-button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={memeImg.randomImg} className="meme--image" />
                <h2 className="meme--text top">{memeImg.topText}</h2>
                <h2 className="meme--text bottom">{memeImg.bottomText}</h2>
            </div>

        </main>
       
    )

}