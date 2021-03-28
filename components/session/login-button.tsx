import { signIn, signOut, useSession } from "next-auth/client";
import { HTMLAttributes } from "react";
import { PrimaryButton } from "../button/primary";

type LoginButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "onClick">;

export function LoginButton(props: LoginButtonProps) {
  const [session, loading] = useSession();

  if (loading) {
    return (
      <PrimaryButton {...props} disabled>
        loading...
      </PrimaryButton>
    );
  }

  if (!session) {
    return (
      <PrimaryButton {...props} onClick={() => signIn()}>
        Sign in
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton {...props} onClick={() => signOut()}>
      Sign out {session.user.name}
    </PrimaryButton>
  );
}
