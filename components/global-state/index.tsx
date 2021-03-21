import { useState, useContext, createContext, ReactNode } from "react";

interface GlobalState {
  theme: "light" | "dark";
  setTheme: (n: "light" | "dark") => void;
}

const Context = createContext<GlobalState | null>(null);

export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
}

export function useGlobalState() {
  const ctx = useContext(Context);
  return ctx;
}
