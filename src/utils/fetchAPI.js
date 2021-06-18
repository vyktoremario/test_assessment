const axios = require('axios');

/* fetching the data from the api based on query data passed */

async function fetchAPI (tags, sortBy="id", direction="asc") {
    const sortValue = ['likes', 'reads', 'id', 'popularity']
    let url = `https://api.hatchways.io/assessment/blog/posts?`
    tags.map(tag => {
        url += `tag=${tag}&`
    })
    let getValue = await axios.get(url)
        if(sortValue.includes(sortBy)) {
            if (direction == 'asc') {
                const data =  getValue.data.posts.sort((a, b) => a[sortBy] - b[sortBy])
                return data
            } else if (direction == 'desc') {
                const data = getValue.data.posts.sort((a,b)=> b[sortBy] - a[sortBy])
                return data
            } else {
                throw new Error("sortBy parameter is invalid")
            }
        } else {
            throw new Error("sortBy parameter is invalid")
        }
    }

module.exports = fetchAPI