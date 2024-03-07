import express from "express";
import users from "./data.js";
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

//List:
app.get("/api/v1/users", (req, res) => {
    res.status(200).json({ success: true, data: users })
});

//Get User by ID:
app.get("/api/v1/users/:id", (req, res) => {
    try {
        const id = req.params.id;
        const finduser = users.find(x => x.id == id);
        if (!finduser) return res.status(404).json({ success: false, message: "Not Data Found" });
        res.status(200).json({ success: true, data: finduser })
    } catch (error) {
        res.status(200).json({ success: true, message: "Error" })
    }
});

//Create:
app.post("/api/v1/users/", (req, res) => {
    try {
        const newUser = { ...req.body, id: uuidv4() }
        res.status(201).json({ success: true, message: "User created successfully", data: newUser });
    } catch (error) {
        res.status(404).json({ success: false, message: "User created failed" });
    }
});

//Update:
app.put("/api/v1/users/:id", (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const update = users.map((user) => user.id === +id ? { id: user.id, ...data } : user);
        res.status(404).json({ success: true, data: update });
    } catch (error) {
        res.status(404).json({ success: false, message: "User created failed" });
    }
});

//Delete:
app.delete("/api/v1/users/:id", (req, res) => {
    try {
        const { id } = req.params;
        const newUsers = users.filter(x => x.id !== +id);
        res.status(404).json({ success: true, message: "User deleted successfully", data: newUsers });
    } catch (error) {
        res.status(404).json({ success: false, message: "User created failed" });
    }
});

app.listen(3500, () => {
    console.log("SERVER STARTED")
});