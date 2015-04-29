eCommerce Project - Part II
=================

## Objectives

The purpose of this application is to build a simple backend using Node, Express, and MongoDB (via MongoJS) and connect it to a simple front-end Angular application.

During this project you will practice using an ORM (Mongoose) to work with your database.  You will also solidify your understanding of models, schemas, middleware, and indexing.

## Resources
* [Mongoose] (http://mongoosejs.com/)

## The Domain

Most companies sell some sort of product and service. For this project we will simulate buidling an eCommerce application. We will finish this project over the next two days.

Today you are going to convert the current Mongo functionality to use Mongoose.  You will be creating a Product model and replacing the current product functionality with that model.  You will also be creating a user model.  You'll use MongoDB's indexing feature to be able to quickly grab users. If you have time, you'll also integrate authentication and the Mongoose model hooks/middleware.

Use this README for instructions today, but use your codebase and push to your repository from day one.

### Step 1: Set up Mongoose

At your application's root folder, run the following command via command line: `npm uninstall --save mongojs`.  This will remove mongojs from your node_modules folder and from your package.json.  Remove or comment out any logic related to MongoJS.

**Breakpoint**: After removing everything MongoJS related, you should be able to start up your server and run it without any errors.

After MongoJS is removed, install Mongoose and follow the [instructions](http://mongoosejs.com/docs/connections.html) to connect to MongoDB.  In your code, connect to Mongo after your Express app has started listening.

**Breakpoint**: After setting up Mongoose, you should be able to listen with your Express app and with Mongoose.  The Mongoose connection method takes a callback as the last argument.  That callback sends one argument, `error`.  `console.log` the `error` parameter.  If it's undefined, you've connected correctly. See [this](http://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback) SO answer for an example.


# THIS IS WHERE I LAST WAS.

### Step 2: Create CRUD (Create, Retrieve, Update, Delete) api routes for your mongo resources

* Install and require your dependencies

* In your server.js, set up your route endpoints:

####/products
GET
POST

####/products/:id
GET
PUT
DELETE

####/customers
GET
POST

####/customers/:id
GET
PUT
DELETE

* Create controllers for each model in a "controllers" folder (e.g. "CustomerController, ProductController", etc)
* Connect controller functions for each CRUD operation to routes in your server.js file. For example, 

```javascript
app.get('/customers/:id', CustomerController.getCustomer);
app.delete('/customers/:id', CustomerController.deleteCustomer);
```

### Step 3: Testing your API
Make sure all operations are working as expected

### Step 4: Create an angular app that can consume this API

Create templates for viewing lists and individual detailed resources

* Create templates for viewing the following:
  * list of products showing only the name and price
  * list of customers showing only the name
  * detailed view for each product
  * detailed view for each customer

* Once your templates and angular routing is done, load the pages to see if you're retrieving data

### Step 5: Modifying Data
Integrate the logic within your angular app to create/modify/delete Products and Customers

* Create and 'edit' template for the following:
  * products
  * customers

The 'edit' template will be shared between the create and edit of these pages. The only difference is the angular controller behind the templates. 

Create an angular controller for creating and one for editing.
The create will POST when the 'Create' button is clicked.
The edit will first GET the details to populate the form fields and then do a PUT when the 'Save' button is clicked.

### Step 6: If you have time, make it pretty using bootstrap, another library, or design it yourself

### Step 7: Indexing
Add indexing for the email field on customer and the name field on products. This will make our api calls much quicker in the future as the application and data grow.

### Step 8: Add more ways to query
Expand on the controllers that we built to be able to query by name as well as _id.

On your `GET /products` add a query string parameter called `query` that will include key words that you define. 

These queries are based on the following objects in mongo:

```json
[
    {
        "_id": "5447e176e28406c36bbe9d2a",
        "name": "iPhone 6 Plus",
        "description": "Our best iPhone - now HUGER!",
        "price": 269.99,
        "__v": 0,
        "active": true
    },
    {
        "_id": "544818a3eb501040088f381a",
        "name": "iPhone 6",
        "description": "Our best iPhone - now as big as android",
        "price": 199.99,
        "__v": 0,
        "active": true
    }
]
```
Below are some examples of a request you might support - yours do not have to be in this format:

The following request: 

`http://localhost:8888/products?query=name-contains:iPhone+max-price:200.00` 

Should return:

```json
{
    "_id": "544818a3eb501040088f381a",
    "name": "iPhone 6",
    "description": "Our best iPhone - now as big as android",
    "price": 199.99,
    "__v": 0,
    "active": true
}
```

* Support querying products given a min or max price or both min and max prices
* Support searching for products by name - if I have a product named iPhone 6 I should be able to retrieve it if I pass in iPhone or 6
* Add other querying that you think would be helpful to your users
