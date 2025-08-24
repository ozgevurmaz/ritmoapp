
export function formatDate(d = new Date(), locale = "en-US") {
  try {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  } catch {
    // Safe fallback (Hermes w/o Intl)
    return `${d.toLocaleDateString("en-US")}`;
  }
}