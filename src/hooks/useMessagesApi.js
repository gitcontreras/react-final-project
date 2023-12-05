import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    limit
  } from "firebase/firestore";
  import { useState } from "react";
  import { db } from "../main";
  
  export const useMessagesApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getMessages = async () => {
      try {
        const res = await query(collection(db, "messages"), orderBy("date","desc"), limit(20));
  
        return onSnapshot(res, (querySnapshot) => {
          setData(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
      } catch (error) {
        setError("Error al cargar messages");
      } finally {
        setLoading(false);
      }
    };
  
    const storeNewMessage = async (message) => {
      try {
        setLoading(true);
        const res = await addDoc(collection(db, "messages"), message);
        return res;
      } catch (error) {
        setError("Error al guardar message");
        throw error;
      } finally {
        setLoading(false);
      }
    };
  
    return { data, error, loading, getMessages, storeNewMessage };
  };