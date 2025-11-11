import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx"; 

const Home = () => {
  const { store, dispatch, getAgenda } = useGlobalReducer();

  useEffect(() => {
    getAgenda();
  }, [getAgenda]);

  return (
    <div className="text-center mt-5">
      <h1>Home Page</h1>
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