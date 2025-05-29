"use client";

import { useUserAuthorizationStore } from "@/store/user-authorization-store";
import { useUserDetailsStore } from "@/store/user-details-store";
import { useEffect } from "react";

interface Props {
  host: string;
  userId: string;
  userName: string;
}

export default function UserInitializer({ host, userId, userName }: Props) {
  const { user_details, setUserDetails } = useUserDetailsStore();
  const { fetchAndSetUserAuthorization } = useUserAuthorizationStore();

  useEffect(() => {
    // console.log("Host: ", host);
    // console.log("User ID: ", userId);
    // console.log("Username: ", userName);

    setUserDetails({ host, userId, userName });
  }, [host, userId, userName, setUserDetails]);

  useEffect(() => {
    // console.log("Store Host: ", user_details.host);
    // console.log("Store User ID: ", user_details.userId);
    // console.log("Store Username: ", user_details.userName);

    if (user_details.userId) {
      fetchAndSetUserAuthorization({
        user_id: user_details.userId,
      });
    }
  }, [user_details.userId, fetchAndSetUserAuthorization]);
  return null;
}
