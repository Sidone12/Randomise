# Posts

[You can get all posts by hitting the below API endpoint 👇👇]

```
https://main--randomss.netlify.app/api/posts
```

[method: GET]

[You can get a specific post by hitting the below endpoint 👇👇]

```
https://main--randomss.netlify.app/api/posts/[id]
```

- where id is the post id

[method: GET]

[You can add a new post by hitting the below endpoint 👇👇]

```
https://main--randomss.netlify.app/api/posts
```

[method: POST]


[and add the post object inside the body of the API request like this 👇👇]
```
body: {
        title: "Your post title",
        body: "your post body"
    },
```
[You can edit a post by hitting the below endpoint 👇👇]
```
https://main--randomss.netlify.app/api/posts/[id]
```
- where id is the post id


[method: PUT]


[and add the post object inside the body of the API request like this 👇👇]
```
body: {
        title: "Your post title",
        body: "your post body"
    },
```

[You can edit part of a post by hitting the below endpoint 👇👇]
```
https://main--randomss.netlify.app/api/posts/[id]
```
- where id is the post id


[method: PATCH]


[and add the post object inside the body of the API request like this 👇👇]
```
body: {
        title: "Your post title",
    },
```

[And finally you can delete a specific post by hitting the below endpoint 👇👇]
```
https://main--randomss.netlify.app/api/posts/[id]
```
- where id is the post id


[method: DELETE]