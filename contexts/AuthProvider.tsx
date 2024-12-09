//
import { createContext, useState, useEffect, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '~/utils/supabase';
import { ActivityIndicator } from 'react-native';

const AuthContext = createContext({});
// @ts-ignore
export default function AuthProviedr({ children }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if(!isReady){
    return <ActivityIndicator />
  }

  return (
    <AuthContext.Provider value={{ session, user: session?.user, isAuth: !!session?.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
