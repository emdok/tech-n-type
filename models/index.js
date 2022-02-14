const User = require('./User');
const Post = require("./Post");

//User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Post belong to users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };