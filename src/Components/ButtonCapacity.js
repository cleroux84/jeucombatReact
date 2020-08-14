import React from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
 
const ButtonCapacity = (props) => {

    const dispatch = useDispatch()
    const hitMonster = ()=> dispatch({type: "HIT_MONSTER", payload: props.player.id})
    const hitBack = ()=> dispatch({type: "HIT_BACK", payload: props.player.id})
    
    const hasPlayed = useSelector((state)=> state.hasPlayed)
    const arrayLength = hasPlayed.length
    const playerCard = document.getElementById(`joueur${props.player.id}`)
   /*  const testX = document.querySelector(`joueur${props.player.id}.btn`) */
    const isDisabled = () => {document.querySelector(`#joueur${props.player.id}`).querySelector('button').disabled = true
                                } 
    const isNotDisabled = () => {document.querySelector(`#joueur${props.player.id}`).querySelector('button').disabled = false
                                }    
    console.log(hasPlayed)

    isNotDisabled

    const combat =()=>{
       
            if(arrayLength===4){
                hasPlayed.splice(0, 4)
       
                
            }
            if(hasPlayed.indexOf(props.player.id) === -1 && arrayLength<=4){
                isDisabled()
                hitMonster()
                hitBack()
                playerCard.classList.add("test")
                document.querySelector(`.img-fluid`).classList.add('animate__animated', 'animate__wobble')
                  }
            if(hasPlayed.indexOf(props.player.id) !== -1)
            {
              alert("choose a new player")
            
            }
        }

          return (
            <button id="bouton" type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
            </button>
        )

}



export default ButtonCapacity;