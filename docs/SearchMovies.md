# Search movies by search terms

Show movies that satisfy search terms

**URL** : `http://127.0.0.1:8080/api/movies?<search_field>=<search_value>`

**Method** : `GET`

## Success Responses

**Code** : `200 OK`

**Content** :

```json
{
  "movies": [{...}],
  "matches": 1
}
```

### OR

**Condition** : When no matches found

**Code** : `200 OK`

**Content** :

```json
{
  "movies": [{...},{...},{...},{...}],
  "matches": 0
}
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
