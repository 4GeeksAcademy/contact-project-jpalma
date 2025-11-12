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

        const images = getData.filter(char => char.image);
        const { usedImages = [] } = store;
        const availablePictures = images.filter(img => !usedImages.includes(img.image));
        const picturesPool = availablePictures.length > 0 ? availablePictures : images;
        const randomImage = picturesPool[Math.floor(Math.random() * picturesPool.length)].image;

      setCharacterImage(randomImage);
      dispatch({type: 'ADD_USED_IMAGE', payload: randomImage})
    })
}
}, [characterImage, store.usedImages]);

const removeContact=()=>{
    if(deleteContact)
        return

    setDelectContact(true)
    removeContacts(contact.id)
    dispatch({type:'REMOVE_CONTACT', payload:contact.id})
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
