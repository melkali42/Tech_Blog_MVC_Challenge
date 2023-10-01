const User = require('./User');
const Post = require('./post');
const Comment = require('./Comment');

// create associations
// User can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post belongs to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Comment belongs to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// Comment belongs to one post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
