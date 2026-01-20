import { Stack } from "expo-router";
import "../global.css";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://fa8e45161529a7871784ebbbdd7f9a44@o4510716212412416.ingest.de.sentry.io/4510734629404752",

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: __DEV__ ? 1.0 : 0.1, // 10% in production
  replaysOnErrorSampleRate: 1.0, // Keep 100% for error sessions
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      Sentry.captureException(error, {
        tags: {
          type: "react-query-error",
          queryKey: query.queryKey[0]?.toString() || "unknown",
        },
        extra: {
          errorMessage: error.message,
          statusCode: error.response?.status,
          queryKey: query.queryKey,
        },
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      // global error handler for all mutations
      Sentry.captureException(error, {
        tags: { type: "react-query-mutation-error" },
        extra: {
          errorMessage: error.message,
          statusCode: error.response?.status,
        },
      });
    },
  }),
});

export default Sentry.wrap(function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </ClerkProvider>
  );
});
