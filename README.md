# AppEngLegoSite

## Introduction

BlockZilla is a website that sells lego bricks.

## Setup and startup

To setup the database for the lego site and start the server, run the below scripts in the terminal:

npm run setup
npm start

## Design

The design of the website is brief and was sketched on paper before coding it. It is simple as I am not the most creative when it comes to designing websites. Also, the website css is not complete and so therefore parts of the website do not look as good as they otherwise would have.

## Implementation

The website was built incrementally, there was not a specific method I took when coding it. I essentially broke the large problem down into smaller problems and did them all once at a time. Designing the website was initially done on paper as aforementioned. However, I did not take into account mobile compatability and focused on the core functionality instead. This proved to be a mistake as I did not fully complete mobile compatibility or compatibility of any sort.

The website is programmed using vanilla Javascript, which is a multi-paradigm programming language. I focused on making the code maintainable by adding numerous comments and by using block scope to the best of my ability. Modularisation was used where possibly too. One thing to note is that I use require for server imports and exports, this is because I wanted to implement testing and some research highlighted to me that ES6 is not highly compatible with JEST. The client side of the system uses ES6 however.

The basket functionality was implemented using localStorage, this could have been executed in the database too. However, I wanted a mixture of client and server-side storage and I did not feel it was necessary to do it entirely in the database.

The backend was implemented using a PostgreSQL database, I chose PostgreSQL as I have already learned PostgreSQL in other modules and I wanted to expand on my knowledge on it further. I wrote my own API calls following the CRUD methodology to interact between the database, server and client.

## Features

1. Clicking the product image or text takes you to the details page for that item.

2. The user can add a single item to the basket using the 'store' page.

3. The user can add multiple items to the basket using the 'item' page.

4. The 'item' page contains a unique URL to the product it is highlighting.

5. The user can login and logout.

6. The user can add more of each product in the basket page.

7. The user can submit the order and the stock will be updated with a confirmation message.

## Known issues

1. When the user clicks the '+' button in the basket page to add a higher number of items to the basket for that item. The cost is not updated in the order summary subtotal the first time the user clicks the button. I did not have the time to fix this, local storage is always updated when the user clicks the button, but the summary is not. I guess the user will get a free brick!

2. When the user clicks the 'remove' button to remove an item from the basket, the item is removed from localStorage and the item is removed from the basket page. However, the summary is not updated to remove those items, refreshing the page does the trick but it is undesirable behaviour I would fix with more time.

3. On the 'item details' page, clicking in the text box allows the user to add negative numbers into it and it breaks the quantity field. In future I will disable to ability to enter into it but again I have run out of time to fully fix this issue.

4. The webpage is not very compatible with mobile, I coded the website whilst being a bit tunnel visioned on functionality and getting it to work on my PC. This is something I regret and should have taken into account nearer the start of the journey. It was highlighted in a module last year but I had completely forgotten about it.

## Future/unfinished work

1. Currently, the user can login but there is no backend support for submitting orders, the database is there to be used and the API calls are there to add users to the database. Unfortunately however, I ran out of time to complete this functionality. The code is there from when I attempted this, some of it is commented out.

2. Implementing a category filter and a search filter were one of my initial plans but I got stuck on the core functionalities and couldn't get around to doing these. The attempts at making a category filter list and search field are there to see.

3. Wishlist option.

4. Adding tests to check backend calls.

## Bibliography

admin. (2021, May 11). Round to 2 decimal places in JavaScript. StackHowTo. https://stackhowto.com/round-to-2-decimal-places-in-javascript/

Connecting. (n.d.). Retrieved 16 May 2022, from https://node-postgres.com/features/connecting

Example of Authentication with Auth0. (2021). [JavaScript]. University of Portsmouth, School of Computing. https://github.com/portsoc/auth0-example/blob/95dd25f867e4f35d9cd93728353b35b5b0997b39/stages/4/ (Original work published 2021)

Finesse. (2018, September 1). Answer to ‘How to create a minus and plus button to update a field?’ Stack Overflow. https://stackoverflow.com/a/52125226

Flaschen, M. (2010, June 29). Answer to ‘Looping through localStorage in HTML5 and JavaScript’. Stack Overflow. https://stackoverflow.com/a/3138591

Node.js, Express.js, and PostgreSQL: CRUD REST API example. (2020, December 23). LogRocket Blog. https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/

Pgtools. (n.d.). Npm. Retrieved 16 May 2022, from https://www.npmjs.com/package/pgtools

Simple Apps need APIs. (2022). [JavaScript]. University of Portsmouth, School of Computing. https://github.com/portsoc/staged-simple-message-board (Original work published 2020)
