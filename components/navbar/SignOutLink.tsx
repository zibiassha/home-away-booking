"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = async () => {
    toast({
      description: "You have been signed out.",
    });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout} className="w-full text-left">
        Sign out
      </button>
    </SignOutButton>
  );
}

export default SignOutLink;
