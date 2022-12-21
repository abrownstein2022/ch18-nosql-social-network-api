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
- [Tests](#test-instructions)
- [Questions](#questions)

## Description
The task for this assignment was to build an API for a social network web application using MongoDB, express.js and the Mongoose ODM.  The application was tested using Insomnia.

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

1. Clone this GitHub repo https://github.com/abrownstein2022/ch12-sql-employee-tracker:
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/ch12-sql-employee-tracker
```

2. From the terminal, install npm, mysql2, inqurier v8.2.4 and npmjs console.table packages:

```bash
$ npm i
$ npm install mysql
$ npm install inquirer@8.2.4
$ npm install console.table --save

```

3. Log into mysql, create the database on your local machine and seed the database:

```bash
$ mysql -u root -p 
mysql> source db/schema.sql
mysql> source db/seeds.sql
```

## Usage

**To start the application, go to the Terminal and enter the line below:**
```bash
$npm start
```
**Then follow the screenshots below:**<br>
![example image 1 main menu](./assets/images/ch12-screen1-mainmenu.jpg)

![example image 2 main menu](./assets/images/ch12-screen2-mainmenu.jpg)

![example image 3 main menu](./assets/images/ch12-screen3-mainmenu.jpg)

![example image 4 view all employees](./assets/images/ch12-screen4-view-all-emp.jpg)

![example image 5 view all roles and departments](./assets/images/ch12-screen5-view-all-roles-depts.jpg)

![example image 6 add employee ](./assets/images/ch12-screen6-add-emp.jpg)

![example image 7 update employee role](./assets/images/ch12-screen7-upd-emp-role.jpg)

![example image 8 add department](./assets/images/ch12-screen8-add-dept.jpg)

![example image 9 add role](./assets/images/ch12-screen9-add-role.jpg)

![example image 10 3 bonus views](./assets/images/ch12-screen10-bonus-views.jpg)

**Please also review the following demonstration video:**

![demo video of how to use this application](./assets/images/ch12-sql-employee-tracker-demo.gif)


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
1. all ones - auttomatic numbering
Feattures for *future* development
 -->
**The main features in this project are:**<br>
1. Uses Node.js, Inqurier, MySQL and npmjs console.table
1. Example screenshots and a demonstration video
1. Necessary folder structure 
1. Professional README

## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch18-nosql-social-network-api
 


