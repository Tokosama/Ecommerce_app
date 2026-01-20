import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function SSOCallback() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/(tabs)"); // ou ta route principale
    }
  }, [isSignedIn]);

  return null;
}
