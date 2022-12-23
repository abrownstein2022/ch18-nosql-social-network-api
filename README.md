# Challenge 18 NoSQL: Social Network API
![license](https://img.shields.io/badge/license-MIT-black)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description
```md
The task for this assignment was to build an API for a social network web application using MongoDB, express.js and the Mongoose ODM.  
The application was tested using Insomnia. I also used date-fns to format dates.
```

**User Story**

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

**Acceptance Criteria**

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
<!-- audience is other developers -->

1. Clone this GitHub repo https://github.com/abrownstein2022/ch18-nosql-social-network-api
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/ch18-nosql-social-network-api
```

2. From the terminal, install npm, express, date-fns and moongoose 6.8.0 packages:

```bash
$ npm i
$ npm install express
$ npm install date-fns
$ npm install mongoose@6.8.0
```

## Usage
1. You will need 2 terminal sessions to use this application.

2. In one of the terminal sessions, start up the mongo server:
```bash
mongod
```
3. In the other terminal session, run the application:
```bash
$npm start
```

Or to start with nodemon

```bash
$npm run dev
```

**The screenshots below show different functionality of the application:**<br>
![example image 1 terminal start commands](./assets/ch18-image1-terminal-start-commands.png)

![example image 2 create user insomnia](./assets/ch18-image2-create-user-insomnia.png)

![example image 3 find user insomnia](./assets/ch18-image3-find-users-insomnia.png)

![example image 4 update user insomnia](./assets/ch18-image4-update-user-insomnia.png)

![example image 5 delete user insomnia](./assets/ch18-image5-del-user-insomnia.png)

![example image 6 get thoughts insomnia](./assets/ch18-image6-get-thoughts-insomnia.png)

**Please review the demonstration video below to see, step-by-step, how the entire application works:**

![demo video of how to use this application](./assets//ch18-nosql-demo.gif)

**Please see the screenshots below to specifically review that thoughts are deleted when users are deleted.**

Run "find all users" to see no users have been created yet.
![example image 1 delete thoughts when user deleted](./assets/ch18-screen1-show-delete-user-thoughts.png)

Create new user brandon.
![example image 2 delete thoughts when user deleted](./assets/ch18-screen2-show-delete-user-thoughts.png)

Create thought for user brandon.
![example image 3 delete thoughts when user deleted](./assets/ch18-screen3-show-delete-user-thoughts.png)

View all thoughts to confirm the new thought has been created for Brandon.
![example image 4 delete thoughts when user deleted](./assets/ch18-screen4-show-delete-user-thoughts.png)

View all users to confirm again that the new thought has been tied to Brandon's userid. 
![example image 5 delete thoughts when user deleted](./assets/ch18-screen5-show-delete-user-thoughts.png)

Delete the user.<br>
![example image 6 delete thoughts when user deleted](./assets/ch18-screen6-show-delete-user-thoughts.png)

View all users to confirm user brandon has been deleted.
![example image 7 delete thoughts when user deleted](./assets/ch18-screen7-show-delete-user-thoughts.png)

View all thoughts to confirm brandon's thought was also deleted. 
![example image 8 delete thoughts when user deleted](./assets/ch18-screen8-show-delete-user-thoughts.png)

## Credits

```md
Alexis Brownstein, Wyzant tutor: Mike
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- list
- items

1. numberd
1. list
1. all ones - automatic numbering
Features for *future* development
 -->
**The main features in this project are:**<br>
1. Uses Node.js, Inquirer, Express, Insomnia, Mongo DB and Mongoose
1. Example screenshots and a demonstration video
1. Necessary folder structure 
1. Professional README
1. Utils.js file in models folder to handle global functions used
1. date-fns used to format dates


## How-to-Contribute

N/A

## Tests

This application was tested with Insomnia using the routes below.

*USERS*
```md
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
```

*THOUGHTS*
```md
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
```

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch18-nosql-social-network-api