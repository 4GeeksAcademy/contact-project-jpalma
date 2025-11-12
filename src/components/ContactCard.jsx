import React, { useEffect, useState } from 'react' 
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import axios from 'axios'
import './ContactCard.css'

const userContactCard=({contact, harryPotterCharacter})=>{
    const {store,dispatch, removeContacts}= useGlobalReducer()
    const[characterImage, setCharacterImage] =useState(null)
    const[deleteContact, setDelectContact] =useState(false)

    useEffect(() => {
if(!characterImage){
  axios
    .get("https://hp-api.onrender.com/api/characters")
    .then(getResponse => getResponse.data)
    .then(getData => {

   
      
    })
}
}, )

const removeContact=()=>{

}
    return(
    <>
        <div className='user-image'>
            <img src={characterImage} />
        </div>
        <div className='card'>
            <p className='name'>{contact.name}</p>
            <div>
                <p className='phone'>{contact.phone}</p>
            </div>
            <p className='email'>{contact.email}</p>
            <button className='remove-button' onClick={removeContact}>🗑</button>
        </div>
    </>
    )


}
export default userContactCard;
