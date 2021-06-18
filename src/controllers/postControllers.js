const express = require('express');
const fetchAPI = require('../utils/fetchAPI');

/* Controller for Getting blog posts. Returns an array of blogs that matches the query */

const getBlogPost = async (req, res, next) => {
    try {
        let { tags, sortBy, direction } = req.query
        if(!req.query.tags) throw new Error("Tags parameter is required")
        tags = req.query.tags.split(',')
        sortBy = req.query.sortBy
        direction = req.query.direction
        const data = await fetchAPI(tags, sortBy, direction)
       return res.status(200).json({
            posts: data
        })
    } catch (error) {
       return res.status(400).json({
            error: error.message
        })
    }
} 

module.exports = getBlogPost