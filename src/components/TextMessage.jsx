import { getAuth } from "firebase/auth";


const TextMessage = ({message}) => {

  const auth = getAuth();
  const user = auth.currentUser;

    return (
      <>
          {
            user?.email==message.userAccount ?
            <li className="flex flex-col gap-2 p-0 items-center rounded-xl shadow bg-white">
             <span className="text-center text-black font-bold">Tu</span>
             <span className="text-center text-black font-bold text-sm">{message.message}</span>
            </li>
            :
            <li className="flex flex-col gap-2 p-0 items-center  rounded-xl shadow bg-sky-500">
              <span className="text-center text-black font-bold">{message.userAccount}</span>
              <span className="text-center text-black font-bold text-sm">{message.message}</span>
              </li>
          }
  

      </>
      )
}

export default TextMessage;