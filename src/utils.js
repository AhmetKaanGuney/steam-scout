const API = "http://127.0.0.1:5000/";

export function calculateReviews(positive, negative) {
  let total = positive + negative;
  let positivePercentage = positive / total * 100;
  return Math.round(positivePercentage).toFixed(1);
}

export function getReviewState(rating) {
  if (rating === undefined) {
    throw Error("rating is undefined!")
  }
  if (rating === null) {
    return "N/A"
  }
  if (rating > 80) {
    return "positive";
  } else if (rating < 50) {
    return "negative";
  } else {
    return "mixed";
  }
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

export async function fetchApps(query) {
  return fetch(`${API}GetAppList?` + buildSearchParams(query))
    .then(res => {
      // check errors
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status + " " + res.statusText);
      }
    })
    .catch(e => console.error('Error:', e));
}

export function fetchAndUpdate(query, callback, cache) {
  const key = generateKey(query);
  if (key in cache) {
    callback(cache[key]);
    return;
  }
  fetchApps(query).then(res => {
    if (res !== undefined) {
      cache[key] = res;
      callback(res);
    }
  });
}

function buildSearchParams(query) {
  const searchParams = new URLSearchParams(query);
  return searchParams.toString();
}

export function enumerate(arr) {
  const enumerated = [];

  for (let i = 0; i < arr.length; i++) {
    enumerated.push([i, arr[i]]);
  }

  return enumerated;
}

export function debounce(func, delay=300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function generateKey(query) {
  return JSON.stringify(query);
}
