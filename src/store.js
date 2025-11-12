export const initialStore=()=>{
  return{
    message: null,
    agenda: null,
    contacts: [],
    usedImages:[]
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
    case 'REMOVE_CONTACT':
      return{
        ...store,
        contacts: store.contacts.filter(contact =>contact.id !== action.payload)
      }
      case 'ADD_USED_IMAGE':
        return{
          ...store,
          usedImages: [...(store.usedImages || []), action.payload]
        }
    default:
      throw Error('Unknown action.');
  }    
}
