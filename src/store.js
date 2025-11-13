export const initialStore=()=>{
  return{
    message: null,
    agenda: null,
    contacts: [],
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
    case 'SET_CONTACTS':
      return{
        ...store,
        contacts: action.payload
      }
    
    default:
      return store
  }    
}
