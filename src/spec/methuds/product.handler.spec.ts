import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("product Handlers and endpoints", () => {
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        const fet = await request
            .get('/api/products')
            .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3cml0ZXIiLCJpYXQiOjE2NzI1NDA3NjgsImV4cCI6MTY3MzE0NTU2OH0.7V7ROmSt_27bHBLee_tdi3eiGa1vIwxna3in65KBhtA`)
        expect(fet.statusCode).toBe(200)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        // let data = {}
        const info = await
            request
                .post('/api/products/add')
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3cml0ZXIiLCJpYXQiOjE2NzI1NDA3NjgsImV4cCI6MTY3MzE0NTU2OH0.7V7ROmSt_27bHBLee_tdi3eiGa1vIwxna3in65KBhtA`)
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 401`, async () => {
        // let data = {}
        const info = await
            request
                .put('/api/products/update')
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3cml0ZXIiLCJpYXQiOjE2NzI1NDA3NjgsImV4cCI6MTY3MzE0NTU2OH0.7V7ROmSt_27bHBLee_tdi3eiGa1vIwxna3in65KBhtA`)        
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 401`, async () => {
        // let data = {}
        const info = await
            request
                .delete('/api/products/delete/1')
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */

})