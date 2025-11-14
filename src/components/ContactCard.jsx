import React, { useEffect, useState } from 'react' 
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import axios from 'axios'
import './ContactCard.css'
import {EditContact} from './EditContact.jsx'

const userContactCard=({ contact })=>{
    const {removeContacts}= useGlobalReducer()


    return(
    <>
    <div className='container'>
        <div className='user-image'>
            <img className="contact-image" src= "https://wallpapers.com/images/hd/harry-potter-all-characters-1024-x-768-1ptifhpz3q83lftn.jpg" alt="Contact profile"/>
        </div>
        <div className='card'>
            <p className='name'>{contact.name}</p>
            <div>
                <p className='phone'>{contact.phone}</p>
            </div>
            <p className='email'>{contact.email}</p>
            <EditContact contact={contact} />
            <button className='remove-button' onClick={()=>removeContacts(contact.id)}>🗑</button>
        </div>
    </div>
    </>
    )


}
export default userContactCard;
