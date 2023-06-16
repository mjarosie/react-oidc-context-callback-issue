"use client";

import { useAuth } from "react-oidc-context";

export default function Home() {
  const auth = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {auth.isAuthenticated ? (
        <div>
          <p>Signed in as {auth.user?.profile.email}</p>
          <div>
            <button onClick={() => auth.removeUser()}>Sign out</button>
          </div>
        </div>
      ) : (
        <div>
          Not signed in <br />
          <button onClick={() => auth.signinRedirect()}>Sign in</button>
        </div>
      )}
    </main>
  );
}
