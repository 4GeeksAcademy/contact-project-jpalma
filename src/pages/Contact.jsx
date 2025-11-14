import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { postContact } from "../hooks/actions.js";
const Contact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const { dispatch } = useGlobalReducer();

  const navigate = useNavigate();
;
const handleContact = (e) => {
  e.preventDefault();
  if (!newContact.name || !newContact.phone || !newContact.email || !newContact.address) {
    alert("You must complete all the fields in order to advance.");
    return;
  }
  postContact(dispatch, newContact);

  navigate("/");
};


return(
          <form className="container">
            <div className="container-input">
              <div className="contact-info">
                <div className="name-input">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                  />
                </div>
                <div className="phone-number">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number "
                    value={newContact.phone}
                    onChange={(e) =>
                      setNewContact({ ...newContact, phone: e.target.value })
                    }
                  />
                </div>
                <div className="email-input">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newContact.email}
                    onChange={(e) =>
                      setNewContact({ ...newContact, email: e.target.value })
                    }
                  />
                </div>
                <div className="address">
                  <label>Address:</label>
                  <input
                    type="text" 
                    placeholder="Enter your address"
                    value={newContact.address}
                    onChange={(e) =>
                      setNewContact({
                        ...newContact,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="create-contact">
                  <button onClick={(e) => handleContact(e)}>Create Wizard</button>
                </div>
              </div>
            </div>
          </form>
)
}

export default Contact