# Get all movies

Show all movies

**URL** : `http://127.0.0.1:8080/api/movies`

**Method** : `GET`

## Success Responses

**Code** : `200 OK`

**Content** :

```json
[
  {
    "description": "Four tales of crime adapted from Frank Miller's popular comics, focusing around a muscular brute who's looking for the person responsible for the death of his beloved Goldie, a man fed up with Sin City's corrupt law enforcement who takes the law into his own hands after a horrible mistake, a cop who risks his life to protect a girl from a deformed pedophile, and a hitman looking to make a little cash.",
    "duration": 119,
    "id": 3532674,
    "imdbId": "tt0401792",
    "languages": ["de", "en"],
    "originalLanguage": "en",
    "productionYear": 2005,
    "studios": ["Studiocanal", "Paramount"],
    "title": "Sin City",
    "Title": "Sin City",
    "Year": "2005",
    "Rated": "R",
    "Released": "01 Apr 2005",
    "Runtime": "119 min",
    "Genre": "Crime, Thriller",
    "Director": ["Frank Miller", "Robert Rodriguez", "Quentin Tarantino"],
    "Writer": ["Frank Miller (graphic novels)"],
    "Actors": ["Jessica Alba", "Devon Aoki", "Alexis Bledel", "Powers Boothe"],
    "Plot": "Four tales of crime adapted from Frank Miller's popular comics, focusing around a muscular brute who's looking for the person responsible for the death of his beloved Goldie, a man fed up with Sin City's corrupt law enforcement who takes the law into his own hands after a horrible mistake, a cop who risks his life to protect a girl from a deformed pedophile, and a hitman looking to make a little cash.",
    "Language": "English",
    "Country": "USA",
    "Awards": "38 wins & 53 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
      { "Source": "Internet Movie Database", "Value": "8.0/10" },
      { "Source": "Rotten Tomatoes", "Value": "77%" },
      { "Source": "Metacritic", "Value": "74/100" },
      { "Source": "Joyn", "Value": "3.9/5.0" }
    ],
    "Metascore": "74",
    "imdbRating": "8.0",
    "imdbVotes": "730,316",
    "imdbID": "tt0401792",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }
]
```

## Error Responses

**Condition** : When OMDB fails to respond or something went wrong

**Code** : `500 OK`

**Content** :

```json
{
  "statusCode": 500,
  "error": "Internal Server Error",
  "message": "Message"
}
```
