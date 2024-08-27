"use client"


import { useContext } from "react";
import { WixClientContext } from "../context/wixContext";


export const useWixClient = () => {

    const wixClient = useContext(WixClientContext);
    return wixClient;
};


// const wixClient = createClient({
//     modules: {
//       products,
//       collections,
//       //currentCart
//     },
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       tokens: {
//         refreshToken,
//         accessToken: { value: "", expiresAt: 0 },
//       },
//     }),
//   });
  