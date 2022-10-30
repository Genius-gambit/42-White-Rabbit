const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()); //=>req.body

//ROUTES//

//get all tips

app.get("/tips", async (req, res) => {
	try {
		const allTips = await pool.query("SELECT * FROM tip");
		res.json(allTips.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//get a tip

app.get("/tips/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const tip = await pool.query("SELECT * FROM tip WHERE tip_id = $1", [id])
		res.json(tip.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//create a tip

app.post("/tips", async (req, res) => {
	try {
		const { description } = req.body;
		const newTip = await pool.query(
			"INSERT INTO tip (description) VALUES ($1) RETURNING *", 
		[description]
		);
		res.json(newTip.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//update a tip

app.put("/tips/:id", async (req, res) => {
	try {
		const { id } = req.params; //WHERE
		const { description } = req.body; //SET

		const updateTip = await pool.query("UPDATE tip SET description = $1 WHERE tip_id = $2", [description, id]);
		res.json("Tip was updated!");
	} catch (err)
	{
		console.error(err.message);
	}
});

//delete a tip

app.delete("/tips/:id", async (req, res) => {
	try {
		const {id} = req.params;
		const deleteTip = await pool.query("DELETE FROM tip WHERE tip_id = $1", [id]);
		res.json("Tip was successfully deleted");
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(3000, () => {
	console.log("server is listening on port 3000");
})