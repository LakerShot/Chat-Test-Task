import { EUID, UUID } from "../../constants/chat";
import { UUIDPayload, EUIDPayload, CUIDPayload } from "../types";

export class ChatService {
    static baseUrl: URL = new URL('https://biz.nanosemantics.ru/api/2.1/json/Chat.')

    static permittedEndpoints = {
        INIT: 'init',
        READY: 'event',
    }

    static async initChat () {
        const data  = await ChatService.requestData<UUIDPayload>(ChatService.permittedEndpoints.INIT, { uuid: UUID })
        return data;
    }

    static async initReadyState (payload: CUIDPayload) {
        const data  = await ChatService.requestData<EUIDPayload>(ChatService.permittedEndpoints.READY, { euid: EUID, ...payload })
        return data;
    }

    static async requestData <T>(endpoint: string, requestData?: T): Promise<unknown> {
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
