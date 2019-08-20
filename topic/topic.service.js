const db = require('_helpers/db');
const Topic = db.Topic;

module.exports = {
    create,
    getTopicByUserId,
    deleteTopic
};

async function create(userParam) {

    const topic = new Topic(userParam);

    // save user
    await topic.save();
}

async function getTopicByUserId(userId) {
    return await Topic.find({ userId: userId },['URL','port','topic','id','password','username']);
}

async function deleteTopic(id){
    await Topic.findByIdAndRemove(id);
}