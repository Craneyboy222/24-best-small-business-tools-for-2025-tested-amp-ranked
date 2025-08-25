/* Analytics utilities */

export const trackEvent = (event: string, properties: { [key: string]: any }): void => {
  console.log(`Tracking event: ${event}`, properties);
  // Here you would integrate with an analytics service like Google Analytics or Mixpanel
};

export const trackPageView = (url: string): void => {
  console.log(`Tracking page view: ${url}`);
  // Here you would integrate with an analytics service
};