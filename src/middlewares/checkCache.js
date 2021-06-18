const checkCache = (req, res, next) => {
    // Use only cache if user not signed in
    res.use_express_redis_cache =  (process.env.NODE_ENV != 'test');
    next();
    }

    module.exports = checkCache