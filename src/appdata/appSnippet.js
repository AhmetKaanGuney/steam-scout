import mockDetails from "../mock-data/mock-details.js";
import headerImagePlaceholder from "../assets/images/placeholder.svg";

// Added genres and categories to attributes to AppSnippet
export default class AppSnippet {
  static defaults = {
    "app_id": null, 
    "name": "N/A",
    "price": "N/A",
    "release_date": "N/A", 
    "coming_soon": false,
    "rating": "N/A",
    "positive_reviews": "N/A", 
    "negative_reviews": "N/A",
    "owner_count": "N/A",
    "header_image": headerImagePlaceholder,
    "tags": null,
    "genres": null,
    "categories": null,
    "windows": false, "mac": false, "linux": false 
  }

  constructor(app) {
    if (!app) {
      app = AppSnippet.defaults;
    }
    if (app.header_image === null) {
      this.headerImage = headerImagePlaceholder
    } else {
      this.headerImage = app.header_image;
    }
    this.appid = app.app_id;
    this.name = app.name;
    this.price = app.price;
    this.releaseDate = app.release_date;
    this.comingSoon = app.coming_soon;
    this.rating = app.rating;
    this.positiveReviews = app.positive_reviews;
    this.negativeReviews = app.negative_reviews;
    this.ownerCount = app.owner_count;
    this.tags = app.tags;
    this.genres = app.genres;
    this.categories = app.categories;
    this.windows = app.windows;
    this.mac = app.mac;
    this.linux = app.linux;
  }

  static mock() {
    return new AppSnippet(mockDetails());
  }
}