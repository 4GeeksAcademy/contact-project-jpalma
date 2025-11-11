export const initialStore=()=>{
  return{
    message: null,
    agenda: null,
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SET_AGENDA':
      return {
        ...store,
        agenda: action.payload.agenda,
        contacts: action.payload.contacts
      };
    case 'REMOVE_CONTACT':
      return{
        ...store,
        contacts: store.contacts.filter(contact =>contact.id == action.payloaf)
      }
    default:
      throw Error('Unknown action.');
  }    
}
