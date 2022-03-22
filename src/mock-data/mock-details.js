import Applist from "../components/Applist.js";

let appDetails = {
    "app_id"  : 0,
    "name"    : "Test Title Edition: Extreme Gang of Wars",
    "price"   : null,

    "release_date": "14-04-2000",
    "coming_soon" : false,

    "developers": ["dev1", "dev2"],
    "publishers": ["pub1"],

    "tags"        : [
        {
            "id": 0,
            "name": "TestTag 1",
            "votes": 1
        },
        {
            "id": 1,
            "name": "TestTag 2",
            "votes": 12
        },
        {
            "id": 2,
            "name": "TestTag 3",
            "votes": 54
        },
        {
            "id": 3,
            "name": "TestTag 4",
            "votes": 34
        },
        {
            "id": 4,
            "name": "TestTag 5",
            "votes": 34
        },
        {
            "id": 5,
            "name": "TestTag 6",
            "votes": 34
        },
    ],
    "genres"      : {
        "TestGenre": 0
    },
    "categories"  :{
        "TestCat": 0
    },

    "owner_count"     : 0,
    "positive_reviews": 50,
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
    "mac"     : true,
    "linux"   : true
}

export default function mockDetails(appID) {
    let newApp = {...appDetails};
    newApp.app_id = appID;
    return newApp;
}