"use client";

import { useUserDetailsStore } from "@/store/user-details-store";
import { useEffect } from "react";

interface Props {
  host: string;
  userId: string;
  userName: string;
}

export default function UserInitializer({ host, userId, userName }: Props) {
  const { user_details, setUserDetails } = useUserDetailsStore();

  useEffect(() => {
    // console.log("Host: ", host);
    // console.log("User ID: ", userId);
    // console.log("Username: ", userName);

    setUserDetails({ host, userId, userName });
  }, [host, userId, userName]);

  useEffect(() => {
    console.log("Store Host: ", user_details.host);
    console.log("Store User ID: ", user_details.userId);
    console.log("Store Username: ", user_details.userName);
  }, [user_details]);
  return null;
}
