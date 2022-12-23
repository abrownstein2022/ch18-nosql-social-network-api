## USERS
`api/users`  
    - GET: return all users  
    - POST: create a new user  

`api/users/:user_id`  
    - GET: a single user by `_id`  
    - PUT: update a user by `_id`  
    - DELETE: delete a user by `_id`  (and also delete their thoughts if any exist)

`api/users/:user_id/friends/:friend_id`  
    - POST: add a new friend to the users list 
    - DELETE: remove a friend from the users friend list

## THOUGHTS
`api/thoughts`  
    - GET: get all thoughts  
    - POST: create a new thought  

`api/thoughts/:thought_id`  
    - GET: get a thought by its `_id`  
    - PUT: update a thought by its `_id`  
    - DELETE: delete a thought by its `_id`  

`api/thoughts/:thought_id/reactions`  
    - POST: create and add a reaction to the thoughts reactions list  
    - DELETE: delete a reaction by its thought id  
