type EngagementEvent = {
  section: string;
  action: "view" | "click";
  label?: string;
};

export function trackEngagementEvent(event: EngagementEvent) {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("fullstackx:engagement", {
      detail: event,
    }),
  );
}
