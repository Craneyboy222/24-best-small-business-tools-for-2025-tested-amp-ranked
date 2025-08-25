export function registerEvent(target: EventTarget, eventType: string, callback: EventListener) {
  target.addEventListener(eventType, callback);
}

export function unregisterEvent(target: EventTarget, eventType: string, callback: EventListener) {
  target.removeEventListener(eventType, callback);
}

export function dispatchCustomEvent(target: EventTarget, eventType: string, detail?: any) {
  const event = new CustomEvent(eventType, { detail });
  target.dispatchEvent(event);
}