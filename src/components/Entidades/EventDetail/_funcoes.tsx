import dayjs from "dayjs";

export function calculateTimeRemaining(date: string) {
  if (!date) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const currentDate = dayjs();
  const targetDate = dayjs(date);

  const diffInMilliseconds = targetDate.diff(currentDate);

  if (diffInMilliseconds < 24 * 60 * 60 * 1000) {
    // Menos de 24 horas, calcular manualmente
    const hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
    const minutes = Math.floor((diffInMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diffInMilliseconds % (60 * 1000)) / 1000);

    return {
      days: 0,
      hours,
      minutes,
      seconds,
    };
  }

  const days = targetDate.diff(currentDate, "day");
  const hours = targetDate.diff(currentDate, "hour") % 24; // Limita a 24 horas
  const minutes = targetDate.diff(currentDate, "minute") % 60;
  const seconds = targetDate.diff(currentDate, "second") % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
