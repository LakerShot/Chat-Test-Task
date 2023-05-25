import { useLocalStorage} from "./useLocalStorage";
import { CUID_LS_PREFIX, PERMITTED_ROLES } from "../constants/chat";
import { useEffect, useState } from "react";
import { ChatService } from "../api/services/chat-service";

export const useChat = () => {
    const [cuid, setCuid] = useLocalStorage(CUID_LS_PREFIX, '');
    const [messages, setMessages] = useState([])

    useEffect( () => {
        ChatService.initChat()
            .then(data => setCuid(data.result?.cuid))
            .then(() => ChatService.initReadyState({ cuid }))
            .then(messageDto => setMessages(prevState => {
                const botMessage = {
                    id: messageDto.result?.id,
                    message: messageDto.result?.text?.value,
                    role: PERMITTED_ROLES.BOT,
                }
                return [...prevState, botMessage]
            }))
    }, [])

    return { messages, setMessages }
}
