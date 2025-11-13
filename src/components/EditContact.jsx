import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import { getContacts, updatedContacts } from '../hooks/actions'
import axios from 'axios'

const EditContact=()=>{
    const {id } =useParams()

const[editContact, setEditContact] =useState({
    name:"",
    phone:"",
    email:"",
    address:""
})

useEffect(()=>{
    getContacts()
},[])

const handleSubmit=(e)=>{
    e.preventDefault()

    useEffect(()=>{
        updatedContacts()
    })

}
return(
    <div>
        <button className='edit'>Edit contact</button>
    </div>
)
}