import { fetchProfileImage } from "@/utils/actions";
import React from "react";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (!profileImage)
    return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;

  return (
    <img
      src={profileImage}
      alt="Profile Image"
      width={50}
      height={50}
      className="rounded-full w-6 h-6 object-cover"
    />
  );
}

export default UserIcon;
