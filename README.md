eCommerce Project - Part II
=================

## Objectives

The purpose of this application is to build a simple backend using Node, Express, and MongoDB and connect it to a simple front-end Angular application.

During this project you will practice using an ORM (Mongoose) to work with your database.  You will also solidify your understanding of models, schemas, middleware, and indexing.

## Resources
* [Mongoose] (http://mongoosejs.com/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt) or [Bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) for Windows users

## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application. We will finish this project over the next two days.

Today you are going to convert the current Mongo functionality to use Mongoose.  You will be creating a Product model and replacing the current product functionality with that model.  You will also be creating a user model.  You'll use MongoDB's indexing feature to be able to quickly grab users. If you have time, you'll also integrate authentication and the Mongoose model hooks/middleware.

Use this README for instructions today, but use your codebase and push to your repository from day one.

### Step 1: Set up Mongoose

At your application's root folder, run the following command via command line: `npm uninstall --save mongojs`.  This will remove mongojs from your node_modules folder and from your package.json.  Remove or comment out any logic related to MongoJS.

**Breakpoint**: After removing everything MongoJS related, you should be able to start up your server and run it without any errors.

After MongoJS is removed, install Mongoose and follow the [instructions](http://mongoosejs.com/docs/connections.html) to connect to MongoDB.  In your code, connect to Mongo after your Express app has started listening.

**Breakpoint**: After setting up Mongoose, you should be able to listen with your Express app and with Mongoose.  The Mongoose connection method takes a callback as the last argument.  That callback sends one argument, `error`.  `console.log` the `error` parameter.  If it's undefined, you've connected correctly. See [this SO](http://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback) answer for an example.
// DONE


### Step 2: Create Product Model

Remove or comment out the logic from your endopints that handle creating, reading, updating, and deleting products.  You are going to create a Mongoose Product model and do your CRUD actions that way.

Create a new Product schema and model.  Give it the following fields:

 - **Title**: This will be the title of the product
  - String
  - Unique
  - Required
  - Index
 - **Description**: This will describe your product
  - String
  - Required
 - **Price**: This will be the price of your product
  - Number
  - Required
  - Minimum of 0

Feel free to add any additional fields you feel are necessary.

Now go to each of your product endpoints and put the necessary Mongoose logic to [Create](http://mongoosejs.com/docs/api.html#model_Model.create), [Read](http://mongoosejs.com/docs/api.html#model_Model.find), [Update](http://mongoosejs.com/docs/api.html#model_Model.update) and [Delete](http://mongoosejs.com/docs/api.html#model_Model.remove) products. Refer to those links for documentation.

*NOTE*: Remember to keep your code looking clean and neat.  It would be wise for you to outsource the logic from each of your endpoints to a product controller or something similar.  You should also outsource your schema and model declarations to a Product file.  If you need more guidance on how Node's require and export system works, check out [this](http://openmymind.net/2012/2/3/Node-Require-and-Exports/) blog post.

**Breakpoint**: At this point you should be able to manipulate the product data via your Express endpoints just like you could when MongoJS was installed.  Test this using POSTMan and the command line or RoboMongo.  After you test the endpoints, go to your front-end product interface (if you were able to build it yesterday) and make sure that the interface still works and manipulates the data like you expect. You may have to update your data models on the front-end to match the model we just set up with Mongoose.
// DONE

### Step 3: Create User Model

Create a User model with the following fields:

 - **Name**: The user's name
  - String
  - Required
 - **Email**: The user's email
  - String
  - Required
  - Unique
  - Index
 - **Password**: A hash of the user's password
  - String
  - Required
 - **Cart**: The user's cart, where they can store items
  - Array
 - **Orders**: All of the orders a user has made
  - Array

Add the Cart and Orders field to the model, but don't worry about configuring or using them today.  You will use them in tomorrow's project.

Don't connect the user to your Express API.  You will use the User model later on.

**Breakpoint**:  While we don't have the user model hooked up to an API, we can still test it.  Take the user model and create a new user, either in the server file or in the User file.  If you reset your server, it will run the code and create a new user.  Comment out the code and check RoboMongo to ensure that the user was created successfully.

If you pass the last breakpoint, then you have successfully migrated your code to Monoose.  Using an ORM like Mongoose will help to maintain your app's data integrity.  This is an essential step in building a scalable application.

The next two steps will introduce authentication and then integrate your backend to the front-end application that you built yesterday.  You will also expand the application to include new functionality.

### Step 4: Add authentication

In this step you will introduce authentication to your applicatoin.  You'll need to add some more functionality to your user model.  You will need to hash a password before saving it, and create a method that will check to see if a given string matches that user's password.  Then you will introduce local authentication using passport and sessions.

While going through this step, feel free to reference [this](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt) blog post.  It covers almost exactly what you'll be doing in this step.

Use Mongoose's [middleware](http://mongoosejs.com/docs/middleware.html) to generate and save a hash for the user's password. The best hook would likely be pre-save.  You can use a library like [bcrypt](https://www.npmjs.com/package/bcrypt) or [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) to generate the hash.

**Breakpoint**: Create a new user and check to see that the user's password is begin saved to the database as a hash, and not as the user's actual password.

Now that you've hashed your user's password corretly, you'll need to create a method on the user to compare the password when the user tries to log in.  You can add any method to a model by adding it like so `ModelName.methods.methodName = function() {};`.  Create the method and use bycrypt's [compare](https://www.npmjs.com/package/bcrypt#async-recommended) functionality to see if they sent the correct password when signing in.

**Breakpoint**: Test to make sure your password check method works.  Hard code in your server.js (or any other file) a lookup to find a user, then call the method on that user.  Make sure it returns `true` if the passwords match and `false` if they don't.

Now your Mongoose logic should be set up  to work well with authenticaton.  The rest of the project consists of integrating this code with concepts that you've already learned.  The instructions will be very hands-off. Feel free to solve these problems how you like.  Refer to previous projects for examples.

Use Express and Passport (and/or any other libraries you like) to set up a local authentication strategy.  When a user authenticates for the first time, save their information to the database via the User model. Some useful methods are [`findOne`](http://mongoosejs.com/docs/api.html#query_Query-findOne) and [`findOneAndUpdate`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate).

### Step 5: Connect Front-End

Connect your front-end to your server.  Again, you are free to do this how you like.  It would be a good idea to a a register/login page and a dashboard page where the user can see their information and (in the future) their cart and orders.

**Breakpoint**: You should now be able to register, login, and maintain user state on your front-end.

If you have extra time, make sure that you have an interface where users can view products and add them to their cart.  Tomorrow you'll add the actual functionality, but it will give you a head start if you can build the interface today.

Once you've finished the front-end, take some time to style your app and make it user-friendly.  Tomorrow you will finish the app by adding a a cart to the user, allow them to check out, and keep track of their current and past orders.
