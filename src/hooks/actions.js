import axios from 'axios'

export const getAgenda=(dispatch, payload)=>{
    axios.get("https://playground.4geeks.com/contact/agendas/gitttjonzzz")
    .then(response => response.data)
    .then(data => {
        if(data.detail === `Agenda "gitttjonzzz" does not exist.`){
            createNewAgenda()
        } else {
            dispatch({
                type: 'SET_AGENDA',
                payload: {agenda: data.slug, contacts: data.contacts}
            })
        }
    })
    .catch(error => {
        console.log("Error fetching agenda:", error);
    });
}

export const createNewAgenda=(dispatch, payload)=>{
   axios.post("https://playground.4geeks.com/contact/agendas/gitttjonzzz").then(postResponse => postResponse.data)
  .then(postResponse => postResponse.data)
  .then(postData=>{});


  getAgenda(dispatch)
}

export const postContact = (dispatch, payload)=>{
    const {name, phone, email, address } = payload

    axios.post("https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts", {
    name,
    phone,
    email,
    address,

}).then(postResponse => postResponse.data)
  .then(postData => {
        getContacts(dispatch)
  });
}

export const getContacts=(dispatch, payload)=>{
    axios.get("https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts")
    .then(response => response.data)
    .then(data => {}) 
    .catch(error => {
        console.log("Error fetching contacts:", error);
    });
}

export const updatedContacts =(dispatch, payload)=>{
    const { name, phone, email, address, id } = payload;

    axios.put(`https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts/${id}`, {
        name,
        phone,
        email,
        address
    })
    .then(putResponse => putResponse.data)
    .then(putData => {
        getContacts(dispatch);
    })
}
export const removeContacts=(dispatch, payload)=>{
    axios.delete(`https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts/13${payload}`, {
}).then(deleteResponse => deleteResponse.data)
  .then(deleteData => {
    getContacts(dispatch)
  });
}