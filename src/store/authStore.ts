import { create } from "zustand";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface AuthState {
  session: Session | null;
  user: User | null;
  status: "idle" | "loading" | "signed-in" | "signed-out";
  init: () => Promise<void>;
  signOut: () => Promise<void>;
}

/**
 * Single global auth/session store (per spec: Zustand, one store, not per-page).
 * init() should be called once at app boot (see main.tsx) and the store
 * keeps itself in sync via Supabase's onAuthStateChange listener.
 */
export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  user: null,
  status: "idle",

  init: async () => {
    set({ status: "loading" });
    const { data } = await supabase.auth.getSession();
    set({
      session: data.session,
      user: data.session?.user ?? null,
      status: data.session ? "signed-in" : "signed-out",
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session,
        user: session?.user ?? null,
        status: session ? "signed-in" : "signed-out",
      });
    });
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null, status: "signed-out" });
  },
}));
