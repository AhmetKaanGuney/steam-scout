import mockDetails from "../mock-data/mock-details.js";
import headerImagePlaceholder from "../assests/images/header-image-placeholder.svg";

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
    "header_image": headerImagePlaceholder,
    "tags": null,
    "windows": false, "mac": false, "linux": false 
  }

  constructor(app) {
    if (!app) {
      app = AppSnippet.defaults;
    }
    this.appid = app.app_id;
    this.name = app.name;
    this.price = app.price;
    this.releaseDate = app.release_date;
    this.comingSoon = app.coming_soon;
    this.positiveReviews = app.positive_reviews;
    this.negativeReviews = app.negative_reviews;
    this.ownerCount = app.owner_count;
    this.headerImage = app.header_image;
    this.windows = app.windows;
    this.mac = app.mac;
    this.linux = app.linux;
    this.tags = app.tags;
  }

  initWithDefaults(app) {
    const defaults = AppSnippet.defaults;
    const defaultKeys = Object.keys(defaults);
    for (let key of defaultKeys) {
      if (key in app) {
        continue;
      } else {
        app[key] = defaults[key];
      }
    }
  }

  limitTags(tags) {
    if (tags) {
      const maxTagCount = 15;
      tags.splice(maxTagCount);
      return tags;
    }
  }

  static mock() {
    return new AppSnippet(mockDetails());
  }
}