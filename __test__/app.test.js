const request = require('supertest');
const app = require('../src/app');


describe('GET /api/ping', () => {
    it('respond with a success of true', async () => {
        const res = await request(app)
            .get('/api/ping')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
            expect(res.body).toHaveProperty('success');
            expect(res.body.success).toBe(true);
        
    });
});

describe('GET /api/post', () => {
    it('respond with a blog post for various tags', async () => {
        const tags =  ['history', 'politics', 'tech']
        const res = await request(app)
            .get(`/api/posts?tags=${tags}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
            expect(res.body).toHaveProperty('posts');
    });

    it('respond with a 400 Error status for no Tags', async () => {
        const tags =  ['history', 'politics', 'tech']
        const res = await request(app)
            .get(`/api/posts`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);
            expect(res.body).toHaveProperty('error');
            expect(res.body.error).toBe("Tags parameter is required")
            expect(res.status).toBe(400);
    });

    it('respond with a blog post for various tags', async () => {
        const tags =  ['history', 'politics', 'tech']
        const sortBy = 'ran'
        const res = await request(app)
            .get(`/api/posts?tags=${tags}&sortBy=${sortBy}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400);
            expect(res.body.error).toBe("sortBy parameter is invalid")
    });

    it('respond with a blog post for various tags', async () => {
        const tags =  ['history', 'politics', 'tech']
        const sortBy = 'reads'
        const direction = 2
        const res = await request(app)
            .get(`/api/posts?tags=${tags}&sortBy=${sortBy}&direction=${direction}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400);
            expect(res.body.error).toBe("sortBy parameter is invalid")
    });

});