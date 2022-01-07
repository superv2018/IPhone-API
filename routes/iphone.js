const express = require("express");
const router = express.Router();
const db = require("./../db");


// get all iphone data
router.get("/", async (req, res, next) => {
  try {
    const getAllIphone = await db.query(
      "SELECT * FROM iphone ORDER BY iphone_id ASC"
    );
    res.status(200).json(getAllIphone.rows);
  } catch (err) {
    console.error(err);
  }
});

//get one specific iphone data
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneIphoneData = await db.query(
      "SELECT * FROM iphone WHERE iphone_id = $1",
      [id]
    );
    res.status(200).json(oneIphoneData.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//create new iphone data
router.post("/", async (req, res) => {
  try {
    const { model, description, color, price, size } = req.body;
    const createIphoneData = await db.query(
      "INSERT INTO iphone (model, description, color, price, size) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [model, description, color, price, size]
    );

    res.status(201).json(createIphoneData.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update iphone data
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { model, description, color, price, size } = req.body;

    const updateIphoneData = await db.query(
      "UPDATE iphone SET model = $1, description = $2, color = $3, price = $4, size = $5 WHERE iphone_id = $6",
      [model, description, color, price, size, id]
    );
    res.status(200).json(`User modified with ID: ${id}`);
  } catch (err) {
    console.error(err.message);
  }
});

//delete iphone data
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM iphone WHERE iphone_id = $1", [id]);
    res.send(" data deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;