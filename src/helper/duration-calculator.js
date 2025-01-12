const timeAgo = (createdAt) => {

  console.log("Age of the post of the viewer", createdAt);
  
  const postedTime = new Date(createdAt);
  const currentTime = new Date();
  const timeDifference = currentTime - postedTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 30) {
    return `${Math.floor(days / 30)} ${days > 1 ? "Months" : "Month"} ago`;
  } else if (days > 0) {
    return `${days} ${days > 1 ? "Days" : "Day"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours > 1 ? "Hours" : "Hour"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes > 1 ? "Minutes" : "Minute"} ago`;
  } else if (seconds > 40) {
    return `${seconds} ${seconds > 1 ? "Seconds" : "Second"} ago`;
  } else {
    return `Just Now`;
  }
};

export default timeAgo;
