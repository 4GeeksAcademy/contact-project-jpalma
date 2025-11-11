import React, { useEffect, useState } from 'react' 
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import axios from 'axios'

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
      const availablePictures= images.filter(img=> !store.usedImages.includes(img.image))
      const pictureLength = availablePictures.length >0 ? availablePictures: images;
      const randomImage = images[Math.floor(Math.random() * images.length)].image;

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
            <p>{contact.name}</p>
            <div>
                <p>{contact.phone}</p>
            </div>
            <button className='btn' onClick={removeContact}>Remove Contact</button>
        </div>
    </>
    )


}
export default userContactCard;
