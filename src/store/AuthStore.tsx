import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface SocialI {
    title: string
    url: string
}

export interface UserI {
    ID: number
    name: string
    email: string
    bio: string
    socials?: SocialI[]
    cover?: string
    photo?: string
    token?: string
    password?: string
}
export interface AuthStoreI {
    currentUser: UserI | null
    LoginUser: (u: UserI) => void
    LoginInMockUser: () => void
}

const mockUser: UserI = {
    ID: 1,
    name: "kigongo vincent",
    email: "kigongovincent625@gmail.com",
    bio: "developer here",
    socials: [{ url: "tiktok.com", title: "tiktok" }],
    photo: "",
    cover: ""
}

export const useAuthStore = create<AuthStoreI>()(
    persist(
        (set) => ({
            currentUser: null,
            LoginUser: (u) => {
                set({ currentUser: u })
            },
            LoginInMockUser: () => {
                set({ currentUser: mockUser })
            }

        }),
        { name: "______hjcefbfcbdnkckdjhbcbkc________", storage: createJSONStorage(() => localStorage) }
    )
)