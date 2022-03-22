export function calculateReviews(positive, negative) {
  let total = positive + negative;
  let positivePercentage = positive / total * 100;
  return Math.round(positivePercentage).toFixed(1);
}

export function getReviewState(score) {
  if (isNaN(score)) {
    return ""
  }
  if (score > 80) {
    return "positive";
  } else if (score < 50) {
    return "negative";
  } else {
    return "mixed";
  }
}

export function formatDate(date) {
  if (!date) {
    return ""
  }
  // will convert DD-MM-YYYY to YYYY-MM-DD
  const [day, month, year] = date.split("-")
  return [year, month, day].join("-");
}

export function dateToString(date) {
  // dateFormat YYYY-MM-DD
  if (!date) {
    return "N/A";
  }
  const dateObj = new Date(date);
  // Remove day name
  // dateString format Month-DD-YYYY
  const [month, day, year] = dateObj.toDateString().split(" ").splice(1);
  return [day, month, year].join(" ");
}

export async function getApplist(query) {
  console.log("Parameters:\n", query);
  return fetch('http://127.0.0.1:5000/GetAppList?' + buildSearchParams(query))
    .then(res => {
      // check errors
      if (!res.ok) {
        return Promise.reject(res.status + " " + res.statusText);
      }
      return res.json();
    })
    .catch(e => console.error('Error:', e));
}

function buildSearchParams(query) {
  let searchParams = new URLSearchParams(query);
  console.log(searchParams.toString());
  return searchParams.toString();
}