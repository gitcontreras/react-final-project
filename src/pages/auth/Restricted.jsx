import { useEffect } from "react";
import { useMessagesApi } from "../../hooks/useMessagesApi";
import TextMessage from "../../components/TextMessage";
import SendMessage from "../../components/SendMessage";


const Restricted = () => {
    const { data: messages, loading, error, getMessages } = useMessagesApi();

    useEffect(() => {
      const get = async () => {
        const unsubscribe = await getMessages();
        return () => {
          if (typeof unsubscribe === "function") {
            unsubscribe();
          }
        };
      };
      get();
    }, []);

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col items-center justify-center w-fit h-fit bg-slate-200 rounded-md p-8">
                <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
        {loading ? <span>Cargando...</span> : null}
        {error ? <span>Hubo un error</span> : null}
        {messages ? (
          <ul>
            {messages.map((message) => (
              <TextMessage message={message} key={message.id} />
            ))}
          </ul>
        ) : null}

                <SendMessage/>

            </div>
        </div>
    )
}

export default Restricted