var inquirer = require('inquirer');
var mysql = require('mysql');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

var customerProduct;
var customerQuantity;

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
});

function displayProducts() {
    connection.query('SELECT * FROM `products`', function (error, results, fields) {
        results.forEach(function (row) {
            console.log(row.item_id + " | " + row.product_name + " | " + row.price);
        })
        ask();
    });
}

function ask() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter the ID of the product you would like to buy."
        },
        {
            type: "input",
            name: "quantity",
            message: "Enter the quantity you would like to buy."
        }
    ]).then(function (answers) {
        customerProduct = answers.id;
        customerQuantity = answers.quantity;
        checkProduct();
    });
}

function checkProduct() {
    connection.query('SELECT * FROM `products` WHERE `item_id`=?',[customerProduct], function (error, results, fields) {
        var stockQuantity = results[0].stock_quantity;
        if (stockQuantity < customerQuantity ) {
            console.log('Insufficient quantity!');
            connection.end();
        }
        else {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: stockQuantity - customerQuantity
                  },
                  {
                    item_id: customerProduct
                  }
                ],
                function(error) {
                  if (error) throw error;
                  console.log("Order placed successfully!");
                  connection.end();
                }
              );
        }
    });
    
}

