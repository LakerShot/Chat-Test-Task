import { EUID, permittedChatMethods, UUID } from "../../constants/chat";
import { UUIDPayload, EUIDPayload, CUIDPayload, MessagePayload } from "../types";


export type ChatMethods = typeof permittedChatMethods[keyof typeof permittedChatMethods]

export class ChatService {
    static baseUrl: URL = new URL('https://biz.nanosemantics.ru/api/2.1/json/Chat.')

    static async initChat () {
        const data  = await ChatService.requestData<UUIDPayload>(
            permittedChatMethods.INIT, { uuid: UUID }
        )
        return data;
    }

    static async initReadyState (payload: CUIDPayload) {
        const data  = await ChatService.requestData<EUIDPayload>(
            permittedChatMethods.READY, { euid: EUID, ...payload }
        )
        return data;
    }

    static async newMessage (messageDto: MessagePayload) {
        const data  = await ChatService.requestData<MessagePayload>(
            permittedChatMethods.REQUEST, messageDto
        )
        return data;
    }

    static async requestData <T>(endpoint: ChatMethods, requestData?: T): Promise<unknown> {
        const fullUrl: string = ChatService.baseUrl + endpoint;

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData)
            });

            const data = await response.json();
            return data;
        } catch (e) {
            console.log('Woops, something went wrong...')
        }
    }
}
