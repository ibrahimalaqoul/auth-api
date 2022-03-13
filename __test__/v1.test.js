// 'use strict';

// const server = require('../auth/server');
// const supertest = require('supertest');
// const request = supertest(server.app);
// const {databaseexported} = require('../auth/models/index')
// let id;
// beforeAll( async () =>{
//     await databaseexported.sync();
// })
// afterAll( async () =>{
//     await databaseexported.drop();
// })

// describe('testing sport model for v1 route',()=>{
 
//     it ('post new sport', async () => {
//         const response = await request.post('/api/v1/sport').send({
//             sportName: "test",
//             sportPopularity : "test"
//         });
//         expect(response.status).toEqual(201);
//         id = response.body.id
//     });

//     it('testing get all sport',async()=>{
//         const response = await request.get('/api/v1/sport')
//         expect(response.status).toEqual(200)
//     })
        
//     it ('testing sport get by id method',async()=>{
//        const response = await request.get(`/api/v1/sport/${id}`)
//        expect(response.status).toEqual(200);
//    })
  

//    it ('update new sport', async () => {
//     const response = await request.put(`/api/v1/sport/${id}`).send({
//         sportName: "test",
//         sportPopularity : "test"
//     })
//     expect(response.status).toEqual(201);
// });

// it ('deleting sport by id',async()=>{
//     const response = await request.delete(`/api/v1/sport/${id}`)
//     expect(response.status).toEqual(204);
// })

// })


