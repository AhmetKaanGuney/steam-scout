import mockDetails from "../mock-data/mock-details.js";
import HEADER_IMG_PLACEHOLDER from "../assests/images/header-image-placeholder.png";

export default class AppSnippet {
  static defaults = {
    "app_id": null, 
    "name": "N/A",
    "price": "N/A",
    "release_date": "N/A", 
    "coming_soon": false,
    "positive_reviews": "N/A", 
    "negative_reviews": "N/A",
    "owner_count": "N/A",
    "header_image": HEADER_IMG_PLACEHOLDER,
    "tags": [{}],
    "windows": false, "mac": false, "linux": false 
  }

  constructor(vals) {
    // Init with default values
    let defaults = AppSnippet.defaults;
    let defaultKeys = Object.keys(defaults);
    for (let key of defaultKeys) {
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