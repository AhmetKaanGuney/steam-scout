import React from 'react'
import mockDetails from '../mock-data/mock-details.js'

const HEADER_IMG_PLACEHOLDER = "../assests/images/header-image-placeholder.png";

class AppSnippet {
  static defaults = {
    "app_id": null, 
    "name": null, 
    "price": "N/A",
    "release_date": "N/A", 
    "coming_soon": false,
    "positive_reviews": "N/A", 
    "negative_reviews": "N/A",
    "owner_count": "N/A",
    "header_image": HEADER_IMG_PLACEHOLDER,
    "tags": null,
    "windows": false, "mac": false, "linux": false 
  }

  constructor(vals) {
    // Init with default values
    let defaults = AppSnippet.defaults;
    let defaultKeys = Object.keys(defaults);
    for (let key of defaultKeys) {
      console.log("key: ", key)
      if (key in vals) {
        continue;
      } else {
        vals[key] = defaults[key];
      }
    }
    this.appid = vals.app_id;
    this.name = vals.name;
    this.price = vals.price;
    this.releaseDate = vals.release_date;
    this.comingSoon = vals.coming_soon;
    this.positiveReviews = vals.positive_reviews;
    this.negativeReviews = vals.negative_reviews;
    this.ownerCount = vals.owner_count;
    this.headerImage = vals.header_image;
    this.windows = vals.windows;
    this.mac = vals.mac;
    this.linux = vals.linux;
    this.tags = vals.tags;
  }

  static mock() {
    return new AppSnippet(mockDetails());
  }
}

function Applist(props) {
  let filters = props.filters;
  let order = props.order;
  let index = props.index;

  return (
    <ul className='applist'>
      <li className='applist-item'>App1</li>
      <li className='applist-item'>App2</li>
      <li className='applist-item'>App3</li>
    </ul>
  )
}
export default Applist;