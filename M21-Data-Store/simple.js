var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();

// need to remove the info for > add a post db.get to read contents
console.log(db.get('posts').value());

// Add a post 
    // db.get('posts')
    //     .push({ id: 20, title: 'lowdb is awesome', published: true })
    //     .write()

    // db.get('posts')
    // .push({ id: 21, title: 'lowdb is aaa', published: false })
    // .write()

    // db.get('posts')
    // .push({ id: 22, title: 'lowdb is eee', published: true })
    // .write()



// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
