import { useState } from "react";
import { useMessagesApi } from "../hooks/useMessagesApi";
import { Timestamp } from "@firebase/firestore";
import { getAuth } from "firebase/auth";



const SendMessage = () => {


const auth = getAuth();
const user = auth.currentUser;



  const [form, setForm] = useState({
    message: "",
    userAccount:user.email,
    date: Timestamp.fromDate(new Date()),
  });

  const { loading, error, storeNewMessage } = useMessagesApi();


  const handleChange = (e) => {
    let newValue = e.target.value;
    setForm({
      ...form,
      [e.target.name]: newValue,
    });
  };


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const res = await storeNewMessage(form);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col items-center justify-center min-w-[400px] h-fit bg-slate-200 rounded-md p-8">
        <form
          className="flex flex-col w-full mt-4 text-slate-900"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Message"
            className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="message"
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600 ${
              loading ? "bg-slate-200 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Cargando..." : "Send"}
          </button>
          {error ? <span className="text-red-500 mt-2">{error}</span> : null}
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
