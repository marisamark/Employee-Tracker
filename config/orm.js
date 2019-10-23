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

function sqlObjVal(obj){
  let tempArr = [];

  // obj = { name: "Ben", age: 31 }

  for(var i in obj){
    // console.log(name, "Ben")
    // console.log(age, 31)
    // to get "Ben" -> obj[name]

    // name = "Ben"
    tempArr.push(i + " = " + obj[i])
  }

  // ['name="Ben"', 'age="31"']
  // .toString() == "name='Ben', age='31'"
  return tempArr.toString();
}


var orm = {

  selectFrom: function (colTosearch, tableInput, cb) {
    var queryString = "SELECT "+colTosearch.toString()+" FROM ?? ";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      cb(result)
    });
  },

  updateWhere: function(tableName, objColVal, condition){

    var sqlQry = "UPDATE " + tableName;
    sqlQry += " SET ("+ sqlObjVal(objColVal)+") "
    // sqlQry += " SET ( departmane_name = 'house', ..... ) "
    sqlQry += "WHERE " + condition
  },

  insertInto: function (tableName, cols, vals) {
    let sqlQry = "INSERT INTO "+tableName+" (";
    sqlQry +=  cols.toString() + ") ";
    sqlQry += "VALUES (";
    sqlQry += printQmarks(cols) + ");"

    connection.query(sqlQry, vals, function(err, result){
      if(err) throw err;
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
