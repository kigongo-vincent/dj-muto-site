import { create } from "zustand";
import type { AudioI } from "../components/screens/home/Audio";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AudioStoreI {
    isPlaying: boolean
    setIsPlaying: (p: boolean) => void
    playing: AudioI | null
    setPlaying: (a: AudioI) => void
}

export const usePlaying = create<AudioStoreI>()(
    persist(
        (set) => ({
            playing: null,
            isPlaying: false,
            setIsPlaying: (p) => { set(() => ({ isPlaying: p })) },
            setPlaying: (a) => { set(() => ({ playing: a })) }
        }),
        { name: "jvkhfjkebrjfhebfjekbfejf", storage: createJSONStorage(() => localStorage) }
    )
)