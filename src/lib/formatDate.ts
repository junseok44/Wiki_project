export function formatDateYYYYMMDDHHMMSS(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function formatRecentTime(date: Date) {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - date.getTime();
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesDifference < 1) {
    return "방금 전";
  } else if (minutesDifference < 60) {
    return `${minutesDifference}분 전`;
  } else {
    return `${hoursDifference}시간 전`;
  }
}
