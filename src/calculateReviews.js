export default function calculateReviews(positive, negative) {
  let total = positive + negative;
  let positivePercentage = positive / total * 100;
  return Math.round(positivePercentage).toFixed(1);
}