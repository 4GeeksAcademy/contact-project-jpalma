import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx"; 
import '../index.css'
const Home = () => {
  const { store, dispatch, getAgenda } = useGlobalReducer();

  useEffect(() => {
    getAgenda();
  }, []);

  return (
    <div className="text-center mt-5">
      <h2 className="home-title">Wizards</h2>
      {store.contacts && store.contacts.length > 0 ? (
        store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default Home