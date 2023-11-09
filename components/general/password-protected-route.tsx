import PasswordPromptDialog from "../model/password-prompt-dialog";
import { cookies } from 'next/headers'

export default function PasswordProtectedRoute({ children }: { children: React.ReactNode }) {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;
  
  if (!isLoggedIn) {
    return <PasswordPromptDialog />;
  } else {
    return children
  }
}