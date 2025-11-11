import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, useNavigate } from "react-router-dom";

const updateContacts = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const { store, dispatch, updatedContacts, getContacts } = useGlobalReducer();
  const [currentContactDetails, setCurrentContactDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [newContactDetails, setNewContactDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    getContacts();
  },[]);

  useEffect(()=>{
    const currentContact = store.contacts.find((contact)=> contact.id==id)

    if (currentContact){
            setCurrentContactDetails(currentContactDetails)
            setNewContactDetails(setNewContactDetails)
    }
  },[store.contacts, id])

  const updatedDetails = (e) => {
    e.preventDefault();
    updatedContacts(newContactDetails);
    navigate("/");
  };

  return (
    <>  
        <form className="container">
        <div>
            <label>Name: </label>
            <input
            type="text"
            value={newContactDetails.name}
            onChange={(e) =>
                setNewContactDetails({ ...newContactDetails, name: e.target.value })
            }
            />
        </div>
        <div>
            <label>Phone: </label>
            <input
            type="number"
            value={newContactDetails.phone}
            onChange={(e) =>
                setNewContactDetails({
                ...newContactDetails,
                phone: e.target.value,
                })
            }
            />
        </div>
        <div>
            <label>
                Email: 
            </label>
            <input
            type="Email"
            value={newContactDetails.email}
            onChange={(e) =>
                setNewContactDetails({
                ...newContactDetails,
                email: e.target.value,
                })
            }
            />
        </div>
        <div>
            <label>Address: </label>
            <input
            type="text"
            value={newContactDetails.address}
            onChange={(e) =>
                setNewContactDetails({
                ...newContactDetails,
                address: e.target.value,
                })
            }
            />
        </div>
       
        </form>
        <div>
            <button className ="btn btn-primary" onClick={(e)=>updatedDetails(e)}>Change Contact Details</button>
        </div>
    </>
  );
};

export default updateContacts