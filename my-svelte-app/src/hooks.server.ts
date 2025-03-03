import { sequence } from "@sveltejs/kit/hooks";
import {
  handleErrorWithSentry,
  sentryHandle,
  initCloudflareSentryHandle,
} from "@sentry/sveltekit";

export const handle = sequence(
  initCloudflareSentryHandle({
    dsn: "https://5a11848a249a7b5f703c83f552372788@o4508333700677712.ingest.de.sentry.io/4508333717717072",
    tracesSampleRate: 1.0,
    debug: true,
  }),
  sentryHandle()
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
