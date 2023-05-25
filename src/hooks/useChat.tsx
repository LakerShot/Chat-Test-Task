import { useLocalStorage} from "./useLocalStorage";
import { CHAT_MESSAGES, CUID_LS_PREFIX, PERMITTED_ROLES } from "../constants/chat";
import { useEffect, useState } from "react";
import { ChatService } from "../api/services/chat-service";
import {CUIDPayload, Message, MessagePayload} from "../api/types";
import { v4 as uuidv4 } from 'uuid';

export const useChat = () => {
    const [cuid, setCuid] = useLocalStorage<string>(CUID_LS_PREFIX, '');
    const [messages, setMessages] = useLocalStorage<Message[]>(CHAT_MESSAGES, []);

    useEffect( () => {
        if (!cuid) {
            initChat();
        }
    }, [])

    const setNewMessage = (messageDto, role?: PERMITTED_ROLES) => {
        setMessages((prevState) => {
            const botMessage = {
                id: uuidv4(),
                message: messageDto.result?.text?.value || 'Здравствуйте.',
                role: role ?? PERMITTED_ROLES.BOT,
            }
            return [...prevState, botMessage]
        })
    }

    const setNewLocalMessage = (message: string): void => {
        setMessages(prevState => {
            const userMessageDto = {
                id: uuidv4(),
                message,
                role: PERMITTED_ROLES.USER,
            }
            return [...prevState, userMessageDto]
        })
    }

    const clearChatSession = (): void => {
        setMessages([])
        setCuid('')
        localStorage.clear();

        initChat()
    }

    const initChat = () => {
        ChatService.initChat()
            .then(data => setCuid(data.result?.cuid))
            .then(() => ChatService.initReadyState({ cuid } as CUIDPayload))
            .then(messageDto => setNewMessage(messageDto))
            .catch(error => console.error(error))
    }

    const sendNewMessage = (messageDto: MessagePayload) => {
        ChatService.newMessage(messageDto)
            .then(data => setNewMessage(data))
    }

    return {
        cuid,
        messages,
        sendNewMessage,
        setNewLocalMessage,
        clearChatSession
    }
}
