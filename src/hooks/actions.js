export function getAgenda(dispatch, payload){
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

export function createNewAgenda(dispatch, payload){
   axios.post("https://playground.4geeks.com/contact/agendas/gitttjonzzz").then(postResponse => postResponse.data)
  .then(postResponse => postResponse.data)
  .then(postData=>{});


  getAgenda(dispatch)
}

export function postContact(dispatch, payload){
    const {name, phone, email, address } =payload

    axios.post("https://playground.4geeks.com/contact/agendas/gitttjonzzz", {
    name,
    phone,
    email,
    address,

}).then(postResponse => postResponse.data)
  .then(postData => {
        getContacts(dispatch)
  });
}

export function getContacts(dispatch, payload){
    axios.get("https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts")
    .then(response => response.data)
    .then(data => {
        dispatch({
            type:"SET_CONTACTS",
            payload: {contacts: data.contacts}
        }) 
    }) 
    .catch(error => {
        console.log("Error fetching contacts:", error);
    });
}

export function updatedContacts(dispatch, payload){
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
export function removeContacts(dispatch, payload){
    axios.delete(`https://playground.4geeks.com/contact/agendas/gitttjonzzz/contacts/13${payload}`, {
}).then(deleteResponse => deleteResponse.data)
  .then(deleteData => {
    getContacts(dispatch)
  });
}