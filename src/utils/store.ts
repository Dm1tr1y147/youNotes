import { createContext } from 'react'

type User = null | {
    userName: string;
    email: string;
}

const user: User = null

export const StoreContext = createContext(user)