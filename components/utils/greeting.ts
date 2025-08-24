export function getGreetingByTime(d = new Date()) {
  const h = d.getHours();
  if (h < 12) return "Good morning,";
  if (h < 18) return "Good afternoon,";
  return "Good evening,";
}
