import React from "react";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size={"icon"} asChild>
      <Link href="/">
        <LuTent className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
