import { create } from "zustand";
import type { AudioI } from "../components/screens/home/Audio";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AudioStoreI {
    isPlaying: boolean
    setIsPlaying: (p: boolean) => void
    playing: AudioI | null
    menu: AudioI[]
    setMenu: (m: AudioI[]) => void
    setPlaying: (a: AudioI | null) => void
}

export const usePlaying = create<AudioStoreI>()(
    persist(
        (set) => ({
            playing: null,
            isPlaying: false,
            menu: [],
            setMenu: (m) => { set({ menu: m }) },
            setIsPlaying: (p) => { set(() => ({ isPlaying: p })) },
            setPlaying: (a) => { set(() => ({ playing: a })) }
        }),
        { name: "jvkhfjkebrjfhebfjekbfejf", storage: createJSONStorage(() => localStorage) }
    )
)