import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="login">
      <SignedIn>{/* Content to show when the user is signed in */}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

export default Login;
