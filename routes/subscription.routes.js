import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {res.send({ title: "Get all subscriptions" })});

subscriptionRouter.get("/:id", (req, res) => {res.send({ title: "Get subscription details" })});

subscriptionRouter.post("/", (req, res) => {res.send({ title: "CREATE subscription" })});

subscriptionRouter.put("/:id", (req, res) => {res.send({ title: "UPDATE a subscription" })});

subscriptionRouter.delete("/", (req, res) => {res.send({ title: "Delete a subscriptions" })});

subscriptionRouter.get("/user/:id", (req, res) => {res.send({ title: "GET all user subscriptions" })});

subscriptionRouter.put("/:id/cancel", (req, res) => {res.send({ title: "Cancel subscription" })});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {res.send({ title: "GET upcoming renewals" })});

export default subscriptionRouter;  