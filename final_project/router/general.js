const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const doesExist = (username) => {
    // Filter the users array for any user with the same username
    let userswithsamename = users.filter((user) => {
        return user.username === username;
    });
    // Return true if any user with the same username is found, otherwise false
    if (userswithsamename.length > 0) {
        return true;
    } else {
        return false;
    }
}


public_users.post("/register", (req,res) => {
  const username=req.body.username
const password=req.body.password
if(username &&password){
if(!doesExist(username
,password)){
    users.push({"username":username, "password":password});
    return res.status(200).json({message: "User successfully registered. Now you can login"});

}else{    return res.status(404).json({message: "User already exists"});
}}else{    return res.status(404).json({message: "Unable to register user."});
}


});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    return new Promise((resolve) => {
        resolve(books);
    }).then(bookList => {
        return res.status(200).json(bookList);
    }).catch(error => {
        return res.status(500).json({ message: "Unable to fetch book list." });
    });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = parseInt(req.params.isbn);
    return new Promise((resolve, reject) => {
        if (books[isbn]) {
            resolve(books[isbn]);
        } else {
            reject("Book not found");
        }
    }).then(book => {
        return res.status(200).json(book);
    }).catch(error => {
        return res.status(404).json({ message: error });
    });
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    return new Promise((resolve) => {
        let booksByAuthor = [];
        for (let i = 1; i <= 10; i++) {
            if (books[i].author === author) {
                booksByAuthor.push(books[i]);
            }
        }
        resolve(booksByAuthor);
    }).then(booksByAuthor => {
        return res.status(200).json(booksByAuthor);
    }).catch(error => {
        return res.status(500).json({ message: "Unable to fetch books by author." });
    });
 
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
   const title = req.params.title;
    return new Promise((resolve) => {
        let booksByTitle = [];
        for (let i = 1; i <= 10; i++) {
            if (books[i].title === title) {
                booksByTitle.push(books[i]);
            }
        }
        resolve(booksByTitle);
    }).then(booksByTitle => {
        return res.status(200).json(booksByTitle);
    }).catch(error => {
        return res.status(500).json({ message: "Unable to fetch books by title." });
    });
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({reviews:books[parseInt(req.params.isbn)].reviews});
});

module.exports.general = public_users;
