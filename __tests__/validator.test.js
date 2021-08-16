const {describe} = require('@jest/globals');

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);


describe('validator middleware',()=>{
    it ('should Expects a query string from the user with a “name” property ',
    async()=>{

        let name={
            name:"laith"
        };
        let param ='/person';
        let query=`?name=laith`;
        const response =await request.get(`${param}${query}`);
        //assert
        console.log('namamma',name)
        console.log(response.body)
        expect(response.body).toStrictEqual (name)

    })




})