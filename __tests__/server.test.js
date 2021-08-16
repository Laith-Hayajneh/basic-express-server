'user strict';
const {describe} = require('@jest/globals');

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('middleware server', () => {
    it('Should check the 404 not found error', async () => {
        // arrange
        let status = 404;
        let param = '/error';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });



    it('Should check the 500 Internal Server Error', async () => {
        // arrange
        let status = 500;
        let param = '/bad';
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });




    it('Should check the Every Thing Is Working Good Successfully', async() => {
        //arrange
         let status=200;
         let param='/';
         let text='working fine';
         // act
         const response =await request.get(param);
         //assert
         expect(response.status).toBe(status);
         expect(response.text).toBe(text)


    });
});