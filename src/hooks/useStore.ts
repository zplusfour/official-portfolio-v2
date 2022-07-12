import create from "zustand";
import { immer } from "zustand/middleware/immer";

interface Store {
    commandsOpen: boolean;
    setCommandsOpen: (commandsOpen: boolean) => void;
}

const useStore = create(
    immer<Store>((set) => ({
        commandsOpen: false,
        setCommandsOpen: (commandsOpen) => {
            set((state) => {
                state.commandsOpen = commandsOpen;
            });
        },
    }))
);

export default useStore;
