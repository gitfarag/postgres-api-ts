import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Orders Handlers and endpoints", () => {
    /* ------------------------------------- */
    it(`It should get status 401`, async () => {
        const fet = await request
            .get('/api/orders')
        expect(fet.statusCode).toBe(401)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 200`, async () => {
        // let data = {}
        const info = await
            request
                .post('/api/orders/create')
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3cml0ZXIiLCJpYXQiOjE2NzI1NDA3NjgsImV4cCI6MTY3MzE0NTU2OH0.7V7ROmSt_27bHBLee_tdi3eiGa1vIwxna3in65KBhtA`)
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 401`, async () => {
        // let data = {}
        const info = await
            request
                .put('/api/orders/current/update/10')
                .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3cml0ZXIiLCJpYXQiOjE2NzI1NDA3NjgsImV4cCI6MTY3MzE0NTU2OH0.7V7ROmSt_27bHBLee_tdi3eiGa1vIwxna3in65KBhtA`)        
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */
    /* ------------------------------------- */
    it(`It should get status 401`, async () => {
        // let data = {}
        const info = await
            request
                .delete('/api/orders/trash/10')
        expect(info.statusCode).toBe(401)
    });
    /* ------------------------------------- */

})