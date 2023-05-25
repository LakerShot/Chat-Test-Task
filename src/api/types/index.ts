import { PERMITTED_ROLES } from "../../constants/chat";

export type UUIDPayload = {
    uuid: string
}

export type EUIDPayload = {
    euid: string
}

export type CUIDPayload = {
    cuid: string
}

export type MessagePayload = CUIDPayload & {
    text: string
}

export type Message = {
    id: number,
    message: string
    role: string
}
