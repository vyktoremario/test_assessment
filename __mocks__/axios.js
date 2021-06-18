const get = (url) => {
    data = {
        data: {
            posts: [
                {
                  author: "Zackery Turner",
                  authorId: 12,
                  id: 2,
                  likes: 469,
                  popularity: 0.68,
                  reads: 90406,
                  tags: ["startups", "tech", "history"],
                }
            ]
        }
    }

   return  Promise.resolve(data)
}

exports.get = get;