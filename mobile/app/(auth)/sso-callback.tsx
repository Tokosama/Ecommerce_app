import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function SSOCallback() {
  const { isSignedIn , isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && isSignedIn) {
      router.replace("/(tabs)"); 
    }
  }, [isSignedIn,isLoaded,router]);

  return null;
}
