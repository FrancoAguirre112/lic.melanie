// src/utils/analytics.ts

// Tell TypeScript that dataLayer exists on the global window object
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Pushes a custom event to the Google Tag Manager dataLayer.
 * * @param eventName - The name of the custom event (e.g., "wpp", "email")
 * @param eventData - Additional parameters to send with the event
 */
export const pushToDataLayer = (
  eventName: string,
  eventData: Record<string, any> = {},
): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};
