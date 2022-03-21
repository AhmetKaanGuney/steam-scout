export function calculateReviews(positive, negative) {
  let total = positive + negative;
  let positivePercentage = positive / total * 100;
  return Math.round(positivePercentage).toFixed(1);
}

export function getReviewState(score) {
  if (score > 80) {
    return "positive";
  } else if (score < 50) {
    return "negative";
  } else {
    return "mixed";
  }
}

export function formatDate(date) {
  // will convert DD-MM-YYYY to YYYY-MM-DD
  const [day, month, year] = date.split("-")
  return [year, month, day].join("-");
}

export function dateToString(date) {
  // dateObj format dayName-month-dayNumber-Year
  const dateObj = new Date(date);
  // Remove day name
  const [month, day, year] = dateObj.toDateString().split(" ").splice(1);
  return [day, month, year].join(" ");
}