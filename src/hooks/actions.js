import axios from 'axios'

export const getAgenda = (dispatch, payload) => {
    axios.get("https://playground.4geeks.com/contact/agendas/gitttjonzzz")
        .then(response => response.data)
        .then(data => {
            dispatch({
                type: 'SET_AGENDA',
                payload: { agenda: data.slug, contacts: data.contacts }
            })
        })
        .catch(error => {
            if (error.response && error.response.status === 404) {
                console.log("Agenda not found, creating new agenda.");
                createNewAgenda(dispatch);
            } else {
                console.log("Error fetching agenda:", error);
            }
        });
}

export const createNewAgenda=(dispatch, payload)=>{
   axios.post("https://playground.4geeks.com/contact/agendas/gitttjonzzz")
  .then(postResponse => postResponse.data)
  .then(postData=>{
    getAgenda(dispatch)
    window.location.reload()
  });

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
        window.location.reload()
  });
}

export const getContacts=(dispatch, payload)=>{
    axios.get("https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts")
    .then(response => response.data)
    .then(data => {
        dispatch({
            type: 'SET_CONTACTS',
            payload: data
        })
    }) 
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
        window.location.reload()
    }) .catch(error => {
            console.log("Error updating contact:", error);
        });
}
export const removeContacts=(dispatch, payload)=>{
    axios.delete(`https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts/${payload}`, {
}).then(deleteResponse => deleteResponse.data)
  .then(deleteData => {
    getContacts(dispatch)
    window.location.reload()
  }) .catch(error => {
            console.log("Error deleting contact:", error);
        });
    }