require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('./db');


//Middleware for all routes
router.use(express.json());


//get users
router.get("/api/v1/getUser", async (req, res) => {
    try{
        const db = require('./db/indexdb');
        const results = await db.query("select * from app_user"); 
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                data: results.rows,
            },
        })
    } catch(err) {
        console.log(err);
    }
});


//user id for logging in
router.get("/api/users/:id", async (req, res) => {
    res.status(202).json({
        status: "success",
        data: {
            "id": "id",
            "first_name": "first_name",
            "last_name": "last_name",
            "user_name": "user_name",
            "password": "password",
        }
    })
});

//create new item 
router.post("/api/v1/item", async (req, res) => {
    try{
        const db = require('./db/indexdb');
        const results = await db.query("insert into item (item_name, item_description, item_quantity) values ($1, $2, $3) returning *", [req.body.item_name, req.body.item_description, req.body.item_quantity]);
        console.log(results);
        res.status(201).json({
        status: "success",
        results: results.rows.length,
        data: {
            data: results.rows,
        }
    })
    } catch(err) {
        console.log(err);
    }

});

//get item by name

router.get("/api/v1/item/:item_name", async (req, res) => {
    try{
        const db = require('./db/indexdb');
        const results = await db.query("select * from item where item_name = $1", [req.params.item_name]); 
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                data: results.rows,
            },
        })
    } catch(err) {
        console.log(err);
    }
})

//update item
router.put("/api/v1/item/:item_name", async (req, res) => {
        try{
        const db = require('./db/indexdb');
        const results = await db.query("update item set item_name = $1, item_description = $2, item_quantity = $3 where item_id = $4", [req.body.item_name, req.body.item_description, req.body.item_quantity, req.params.item_id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                results: results.rows.length,
                data: results.rows,
            },
                
        });
    } catch(err) {
        console.log(err);
    }
});

//delete item
router.delete("/api/v1/item/:item_name", async (req, res) => {
    try{
        const db = require('./db/indexdb');
        const results = await db.query("delete from item where item_name = $1", [req.params.item_name]);
        console.log(results);
        res.status(204).json({
        status: "success"
       
    });
    } catch(err) {
        console.log(err);
    }

});



module.exports = router;