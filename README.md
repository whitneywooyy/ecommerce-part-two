ecommerce-day-two
=================

## Objectives

Combine what we've learned about the front-end with our new mongo knowledge to create our ecommerce website.

##Resources
* [migrate] (https://github.com/tj/node-migrate)
* [mongoose] (https://github.com/LearnBoost/mongoose)

##Step 1: Seed Products - using migrations
Seed at least 3 products

* Install migrate globally `npm i migrate -g`
* Navigate to the root of your application
* Run `migrate create add-products` in your terminal at the root of your application
* A new file called 00*-add-products.js should have been created within /migrations
* `require` the module in your code where you initialize your mongoose connection
* `require` your Product module
* Create and save your new products in the `exports.up` function - use our [ecommerce day one solutions branch] (https://github.com/DevMountain/ecommerce-day-one/tree/solution) as a guide for migrations

##Step 2: Create CRUD api routes for your mongo resources

* Install and require your dependencies
  * express

* Set up your route endpoints:

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

####/customers/:customer_id/addresses
GET
POST

####/customers/:customer_id/addresses/:id
GET
PUT
DELETE

####/customers/:customer_id/phone-numbers
GET
POST

####/customers/:customer_id/phone-numbers/:id
GET
PUT
DELETE

##Step 3: Create a service layer
These services will interract with mongoose to add/modify your mongo data. You then call these services from your routes.

* Create /lib/services folder
* Create the following javascript files:
  * customer-service.js
  * product-service.js
* Add functions for each CRUD operation and implement mongoose
  * getAll - `Product.find()` - where Product is your mongoose model
  * getById - `Product.findOne({_id: 1234})`
  * create - `new Product({set fields from function params}).save...`
  * update - `Product.findOne({_id: 1234})... modify and save`
  * delete - `Product.remove({_id: 1234})...`

##Step 4: Testing your api
Make sure all operations are working as expected

##Step 5: Create an angular app that can consume this data

##Step 6: Displaying Data
Create templates for viewing lists and individual detailed resources

* Create templates for viewing the following:
  * list of products showing only the name and price
  * list of customers showing only the name
  * detailed view for each product
  * detailed view for each customer

* Once your templates and angular routing is done, load the pages to see if you're retrieving data

##Step 7: Modifying Data
Integrate forms within your angular app to create/modify/delete Products and Customers

* Create and 'edit' template for the following:
  * products
  * customers

The 'edit' template will be shared between the create and edit of these pages. The only difference is the angular controller behind the templates. 

Create an angular controller for creating and one for editing.
The create will POST when the 'Create' button is clicked.
The edit will first GET the details to populate the form fields and then do a PUT when the 'Save' button is clicked.

##Step 8: If you have time, make it pretty using bootstrap, another library, or design it yourself
