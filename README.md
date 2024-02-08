# Social Network API

This is an API for a social network web application that allows users to share their thoughts, create reactions to thoughts, and maintain a friends list.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

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
## Installation and Use

This application is not deployed, so its functionality is not easily accessible without some coding know-how and an API development platform:  
1. Download or clone the repository from GitHub with the link below.
2. In the terminal, install the necessary packages. Such as:
```bash
  npm install
```
3. Seed the data:
```bash
  npm run seed
```
4. Then, start the server up:
```bash
  npm run start
```
5. Open your API development platform of choice, such as Insomnia, Postman, etc. and test the functionality of the routes.
    Routing information can be in the folders [Thought Routes](./routes/api/thoughtRoutes.js) and [User Routes](./routes/api/userRoutes.js).

## Links

* GitHub: https://ivandirigible.github.io/expert-tribble/

The following link demonstrates the Social Network API routes being tested with Insomnia:

* Screencastify: https://app.screencastify.com/v3/watch/9igDZmwXG15jO08vv1WY

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]