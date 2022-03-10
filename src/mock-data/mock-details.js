let appDetails = {
    "app_id"  : 0,
    "name"    : "Test",
    "price"   : null,

    "release_date": "01-01-2000",
    "coming_soon" : false,

    "developers": ["dev1", "dev2"],
    "publishers": ["pub1"],

    "tags"        : [{
        "id": 0,
        "name": "TestTag",
        "votes": 1
    }],
    "genres"      : {
        "TestGenre": 0
    },
    "categories"  :{
        "TestCat": 0
    },

    "owner_count"     : 0,
    "positive_reviews": 200,
    "negative_reviews": 10,

    "about_the_game"      : "About the game...",
    "short_description"   : "Short description...",
    "detailed_description": "Detailed description...",

    "website"     : "",
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/20/header.jpg?t=1579634708",
    "screenshots" : [{
        "id": 0, 
        "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/20/0000000164.600x338.jpg?t=1579634708", 
        "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/20/0000000164.1920x1080.jpg?t=1579634708"
    }, 
    {
        "id": 1, 
        "path_thumbnail": "https://cdn.akamai.steamstatic.com/steam/apps/20/0000000165.600x338.jpg?t=1579634708", 
        "path_full": "https://cdn.akamai.steamstatic.com/steam/apps/20/0000000165.1920x1080.jpg?t=1579634708"
    }],
    "languages": "English, French, German, Italian, Spanish - Spain, Korean, Russian, Simplified Chinese, Traditional Chinese",

    "windows" : true,
    "mac"     : false,
    "linux"   : true
}

export default function mockDetails() {
    return appDetails
}