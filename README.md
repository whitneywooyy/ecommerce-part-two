eCommerce Project - Day 2
=================

## Objectives

Continue creating a full-stack e-commerce application.

## Resources
* [migrate] (https://github.com/tj/node-migrate)

### Step 1: Seed Products - using migrations

Let's use the handy migrate module to seed a product into your DB.

* Install migrate globally `npm i migrate -g`
* Navigate to the root of your application
* Run `migrate create add-product` in your terminal at the root of your application
* A new file called 00*-add-product.js should have been created within /migrations
* `require` the module in your code where you initialize your mongoose connection
* `require` your Product module
* Create and save your new products in the `exports.up` function - use [this gist](https://gist.github.com/cahlan/c5e1f30964599f80d92e) as a guide for how you could do your migration.
* Run `migrate` when complete to automatically seed your data in Mongo.

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

## (Day Three)

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
