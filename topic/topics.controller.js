const express = require('express');
const router = express.Router();
const topicService = require('./topic.service');
var jwtDecode = require('jwt-decode');

// routes
router.post('/create-topic', create);
router.post('/get-topics', getTopicByUserId);
router.post('/delete-topic',deleteTopic);

module.exports = router;

function create(req, res, next) {    
    topicService.create(req.body)
    .then(res.json({}))
    .catch(err => next(err));
}

function getTopicByUserId(req, res, next) {
    topicService.getTopicByUserId(req.body.userId)
        .then(topics => res.json(topics))
        .catch(err => next(err));
}

function deleteTopic(req, res, next){
    topicService.deleteTopic(req.body.id)
        .then(res.json({}))
        .catch(err => next(err));
}

