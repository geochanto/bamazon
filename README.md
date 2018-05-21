# Bamazon (Node.js Storefront App)

## Technologies
1. Node.js / Javascript
2. MySQL

## Node Packages/Dependencies:
1. "inquirer": "^5.2.0"
2. "mysql": "^2.15.0"
3. "table": "^4.0.3"

Please use package.json or install these packages individually

## How it works
Bamazon currently has two views: customer view & manager view

Products are saved in an SQL database called 'products'. Check `schema.sql` for schema.

### Customer view allows a customer to place an order by running `node bamazonCustomer.js` 
1. Customer views a list of products
2. Customer enters the id of the product they want to purchase
3. Customer enters the number of items they want to buy
4. If there are no sufficient items, error is printed. Otherwise order is fullfilled, SQL database updated and Customer is prompted with their total purchase value.
Screencap: http://www.screencast.com/t/4tOVpDD1FV7

### Manager view allows a manager to manage or update the database by running `node bamazonManager.js` 
Once run, manager is presented with 4 choices:
1. If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.
2. If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than five.
3. If a manager selects `Add to Inventory`, app displays a prompt that will let the manager "add more" of any item currently in the store.
4. If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.

Screencap: http://www.screencast.com/t/yAt1g5uBKIoR

## Why this project?
This app helps beginners with understanding and working with MySQL using Node.

## Get started
To get started with this project, do one of the following:

1. Using git from command line, `git clone git@github.com:geochanto/bamazon.git` 
2. Download the zip archive: https://github.com/geochanto/bamazon/archive/master.zip
3. Create a fork at https://github.com/geochanto/bamazon

Note that you will need set up and connect to MySQL for this app to work.

## Improve Bamazon
Add your own spin to this app:

##### 1. Make the logic more DRY. Some functions are repeated.
#### 2. Add the "supervisor" view:

1. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column and modify the `bamazonCustomer.js` app so that this value is updated with each individual products total revenue from each sale.

3. Modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

4. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

5. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

6. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

7. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)

- - -



## Contributors
##### George Chanturidze
##### https://github.com/geochanto/