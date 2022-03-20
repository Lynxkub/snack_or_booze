import axios from 'axios';
import React from 'react';
import SnackOrBoozeApi from './Api';
// import { createServer } from 'miragejs'

// let server

// beforeEach(() => {
//     server=createServer();
// })

// afterEach(() => {
//     server.shutdown();
// })

describe('test the 4 different api calls' , function () {

    const newSnack = {
        id: "testSnack",
        itemName : 'testSnack',
        description: 'this is a test snack',
        recipe: 'this is a test',
        serve : 'still a test'
    }

    const newDrink = {
        id: "testDrink",
        itemName : 'testDrink',
        description: 'this is a test drink',
        recipe: 'this is a test',
        serve : 'still a test'
    }

    test('getSnacks should return all snacks' , async function  () {
        const snacks =  await SnackOrBoozeApi.getSnacks();
        expect(snacks).toEqual([
            {
              "id": "nachos",
              "name": "Nachos",
              "description": "An American classic!",
              "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
              "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
            },
            {
              "id": "hummus",
              "name": "Hummus",
              "description": "Sure to impress your vegan friends!",
              "recipe": "Purchase one container of hummus.",
              "serve": "Place unceremoniously on the table, along with pita bread."
            },
            {
              "id": "arugula-and-walnut-salad",
              "name": "Arugula and Walnut Salad",
              "description": "Tart and delicious.",
              "recipe": "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
              "serve": "Place on tiny, precious little plates."
            },
            {
              "id": "fishsticks",
              "name": "FishSticks",
              "description": "Crispy Fishsticks",
              "recipe": "Fry em up good",
              "serve": "Give it to them"
            },
            {
              "id": "pizza",
              "name": "Pizza",
              "description": "Just get it ",
              "recipe": "Buy a totinos",
              "serve": "Serve on a glass platter"
            }
          ])
    })

    test('getDrinks should return all drinks' , async function() {
        const drinks = await SnackOrBoozeApi.getDrinks();
        expect(drinks).toEqual([
            {
              "id": "martini",
              "name": "Martini",
              "description": "An ice-cold, refreshing classic.",
              "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
              "serve": "Serve very cold, straight up."
            },
            {
              "id": "negroni",
              "name": "Negroni",
              "description": "A nice drink for a late night conversation.",
              "recipe": "Mix equal parts of gin, Campari, and sweet vermouth.",
              "serve": "Serve cold, either on the rocks or straight up."
            },
            {
              "id": "gin-and-tonic",
              "name": "Gin and Tonic",
              "description": "Like regular tonic, but with gin.",
              "recipe": "Mix 2 parts gin & 1 part tonic water.",
              "serve": "Serve in a tall glass over ice, garnished with a lime wedge."
            },
            {
              "id": "diet-coke",
              "name": "Diet Coke",
              "description": "Crisp!",
              "recipe": "Open can.",
              "serve": "Immediately."
            },
            {
              "id": "chocolate milk",
              "name": "Chocolate Milk",
              "description": "Amazing",
              "recipe": "chocolate + milk",
              "serve": "Swirl and give"
            }
          ])
    })

    // test('createSnack to create a snack' , async function () {
    //      await SnackOrBoozeApi.createSnack(newSnack);
    //     const res = await SnackOrBoozeApi.getSnacks();
    //     expect(res[res.length -1]).toEqual({
    //     "id": "testsnack",
    //   "name": "testSnack",
    //   "description": "this is a test snack",
    //   "recipe": "this is a test",
    //   "serve": "still a test"
    //     })
       
    // })

    // test('createDrink to create a drink' , async function () {
    //     await SnackOrBoozeApi.createDrink(newDrink);
    //     const res = await SnackOrBoozeApi.getDrinks();
    //     expect(res[res.length-1]).toEqual({
    //         'id': 'testdrink',
    //         'name' : 'testDrink',
    //         'description' : 'this is a test drink',
    //         'recipe' : 'this is a test',
    //         'serve': 'still a test'
    //     })
        
    // })
        
})