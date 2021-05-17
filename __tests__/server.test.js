'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const { json } = require('express');
const request = supertest(server.app);

describe('server',()=>{
    it('Should get object {name:test}',async function () {
        const res = await request.get('/person?name=test');
        const result = "{\"name\":\"test\"}";
        expect(res.status).toEqual(200);
        expect(res.text).toBe(result);
    });

    it('should be internal error',async ()=>{
        const res = await request.get('/person');
        expect(res.status).toEqual(500);

    })
    it('should be internal error ',async ()=>{
        const res = await request.get('/person');
        expect(res.status).toEqual(500);

    })
    it('should be notFound error',async ()=>{
        const res = await request.post('/person?name=test');
        expect(res.status).toEqual(404);
      
    });

    it('should be notFound error',async ()=>{
        const res = await request.get('/sad');
        expect(res.status).toEqual(404);
      
    });
});