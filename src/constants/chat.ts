// TODO: move uuid and euid to .env file
export const UUID = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'
export const EUID = '00b2fcbe-f27f-437b-a0d5-91072d840ed3'

export const CUID_LS_PREFIX = 'CUID_LS_PREFIX';
export const CHAT_MESSAGES = 'CHAT_MESSAGES'

export const MAX_LENGTH_MESSAGE = 255

export const PERMITTED_ROLES = {
    USER: 'USER',
    BOT: 'BOT'
}

export const permittedChatMethods = {
    INIT: 'init',
    READY: 'event',
    REQUEST : 'request',
} as const
