const inquirer = require('inquirer');
const mysql = require('mysql');
const { table } = require('table');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

function options () {
    inquirer.prompt([
        {
            type: "list",
            name: "command",
            message: "Welcome, oh the great Manager! What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        }
    ]).then(function (answers) {
        var command = answers.command;
        if (command ==="View Products for Sale") {
            forSale();
        }
        else if (command ==="View Low Inventory") {
            lowInventory();            
        }
        else if (command ==="Add to Inventory") {
            addInventory();           
        }
        else if (command ==="Add New Product") {
            addProduct();            
        }
        else {
            return;
        }
    });
}

options();

function forSale() {
    connection.query('SELECT * FROM `products`', function (error, results, fields) {

        //use table to display products to customer
        let config,
            data,
            output;

        //table array
        data = [];

        //column titles array to push into table array
        var columnTitles = [fields[0].name,fields[1].name,fields[3].name,fields[4].name];
        data.push(columnTitles);
        results.forEach(function (row) {
            //cells array to push into table array
            var cells = [row.item_id,row.product_name,row.price,row.stock_quantity];
            data.push(cells);
        })

        //display the table
        output = table(data, config);
        console.log(output);
        connection.end();
    });
}

function lowInventory() {
    connection.query('SELECT * FROM `products` WHERE stock_quantity<5', function (error, results, fields) {

        //use table to display products to customer
        let config,
            data,
            output;

        //table array
        data = [];

        //column titles array to push into table array
        var columnTitles = [fields[0].name,fields[1].name,fields[3].name,fields[4].name];
        data.push(columnTitles);
        results.forEach(function (row) {
            //cells array to push into table array
            var cells = [row.item_id,row.product_name,row.price,row.stock_quantity];
            data.push(cells);
        })

        //display the table
        output = table(data, config);
        console.log(output);
        connection.end();
    });  
}

function addInventory() {
    
}