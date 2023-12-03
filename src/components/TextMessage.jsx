import { useLogin } from "../hooks/useLogin";


const TextMessage = ({message}) => {

    const { user } = useLogin();

    return (<li className="flex flex-col gap-2 p-0 items-center bg-white rounded-xl shadow bg-sky-500">
        <span className="text-center text-black font-bold">{message.userAccount}</span>
        <span className="text-center text-black font-bold text-sm">{message.message}</span>
      </li>)
}

export default TextMessage;