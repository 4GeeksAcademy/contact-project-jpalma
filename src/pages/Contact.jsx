import React, {useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { useNavigate } from 'react-router-dom'

const createContact =()=>{
    const[newContact, setNewContact] =useState({name:"", phone:"", email: "", address:""})

    const {store, dispatch, postConta}
}