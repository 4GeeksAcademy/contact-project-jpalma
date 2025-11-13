import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {updatedContacts } from "../hooks/actions";
import useGlobalReducer from "../hooks/useGlobalReducer";
import './ContactCard.css'
export const EditContact = ({contact}) => {
  const {dispatch} =useGlobalReducer()

  const [editContact, setEditContact] = useState({
    name:"" ,
    phone: "",
    email: "",
    address: "",
    id: null
  });

const [editing, setEditing] =useState(false)

useEffect(() => {
    if (contact) {
      setEditContact({
        name: contact.name || "",
        phone: contact.phone || "",
        email: contact.email || "",
        address: contact.address || "",
        id: contact.id
      });
    }
  }, [contact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditContact( prev => ({...prev , [name]: value }));
  };
 const saveChanges=()=>{
  if(!editContact.id){
      return
 }
    updatedContacts(dispatch, editContact)
    setEditing(false)
 }

  return (
    <div>
        {!editing && (
            <button className="edit-contact" onClick={()=>setEditing(true)}>Edit Contact</button>
        )}
       
   
    {editing && (
        <div className="input-edit">
        
            <input type ="text" onChange={handleInputChange} value={editContact.name}
            name="name" />
                <input type ="" onChange={handleInputChange} value={editContact.phone}
            name="phone" />
            <input type ="email" onChange={handleInputChange} value={editContact.email}
            name="email" />
            <input type ="text" onChange={handleInputChange} value={editContact.address}
            name="address" />
                <div>
                    <button className="save" onClick={saveChanges}>Save</button>
                    <button className="cancel"onClick={()=>setEditing(false)}>Cancel</button>
                </div>
        </div>
        )}
    </div>
  );
};
 
