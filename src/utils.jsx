export function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
}

export function getDayOfWeek(date, day) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, day).getDay();
}
