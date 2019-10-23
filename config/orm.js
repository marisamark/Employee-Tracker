var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// * Console log all the party names.
// * Console log all the client names.
// * Console log all the parties that have a party-type of grown-up.
// * Console log all the clients and their parties.
function printQmarks(arr) {
  let tempArr = [];
  for (var i in arr) {
    tempArr.push("?")
  }
  return tempArr.toString();
}


var orm = {

  selectFrom: function (colTosearch, tableInput, cb) {
    var queryString = "SELECT ?? FROM ?? ";
    connection.query(queryString, [colTosearch, tableInput], function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },

  insertInto: function (tableName, cols, vals) {
    let sqlQry = "INSERT INTO ?? (";
    sqlQry += printQmarks(cols)
    sqlQry += ") VALUES ('";
    sqlQry +=  vals.toString() + "');";
    cols.unshift(tableName);

    console.log(sqlQry, cols)
    connection.query(sqlQry, cols, function(err, result){
      if(err) throw err;
      console.log(result)
    })
  },

  selectFromWhere: function (colTosearch, tableInput, colTosearch2, value) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
    connection.query(queryString, [colTosearch, tableInput, colTosearch2, value], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  selectFromLeftJoin: function (tableOneCol, tableTwoCol, tableOne, tableTwo, tableTwoForeignKey) {

    var queryString =
      "SELECT ??, ?? FROM ?? LEFT JOIN ?? ON ??.?? = ??.id";
    // SELECT client_name, party_name FROM clients LEFT JOIN parties ON parties.client_id = clients.id;

    connection.query(
      queryString,
      [tableOneCol, tableTwoCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne],
      function (err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
