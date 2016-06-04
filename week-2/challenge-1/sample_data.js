db.movies.insert(
    [
        {
            "_id" : 1,
            "title" : "Movie 1",
            "awards" : {
                "oscars" : [
                    {"award": "bestAnimatedFeature", "result": "won"},
                    {"award": "bestMusic", "result": "won"},
                    {"award": "bestPicture", "result": "nominated"},
                    {"award": "bestSoundEditing", "result": "nominated"},
                    {"award": "bestScreenplay", "result": "nominated"}
                ],
                "wins" : 56,
                "nominations" : 86,
                "text" : "Won 2 Oscars. Another 56 wins and 86 nominations."
            },
            "type" : "movie"
        },
        {
            "_id" : 2,
            "title" : "Movie 2",
            "awards" : {
                "oscars" : [
                    {"award": "bestAnimatedFeature", "result": "won"},
                ],
                "wins" : 5,
                "nominations" : 9,
                "text" : "Won 1 Oscar. Another 5 wins and 9 nominations."
            },
            "type" : "movie"
        }
    ]
);
