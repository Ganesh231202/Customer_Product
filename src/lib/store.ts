import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  subscription: 'free' | 'premium';
}

interface AppState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Demo users for testing
const DEMO_USERS = new Map([
  ['demo@example.com', { password: 'demo123', id: '1', subscription: 'free' as const }],
]);

export const useStore = create<AppState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  
  signIn: async (email, password) => {
    const user = DEMO_USERS.get(email);
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    set({ 
      user: {
        id: user.id,
        email,
        subscription: user.subscription
      }
    });
  },

  signUp: async (email, password) => {
    if (DEMO_USERS.has(email)) {
      throw new Error('Email already exists');
    }
    const newUser = {
      password,
      id: String(DEMO_USERS.size + 1),
      subscription: 'free' as const
    };
    DEMO_USERS.set(email, newUser);
    set({ 
      user: {
        id: newUser.id,
        email,
        subscription: newUser.subscription
      }
    });
  },

  signOut: async () => {
    set({ user: null });
  },
}));