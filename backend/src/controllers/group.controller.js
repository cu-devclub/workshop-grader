const group = require("../services/group.service")

async function getMultiple(req, res, next) {
    try {
        res.json(await group.getMultiple())
    } catch (err) {
        console.error(`Error while getting list of group`, err.message);
        next(err);
    }
}

async function get(req, res, next) {
    try {
        res.json(await group.get(req.params.id))
    } catch (err) {
        console.error(`Error while getting list of item in group`, err.message);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        res.json(await group.create(req.body))
    } catch (err) {
        console.error(`Error while creating group`, err.message);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await group.update(req.params.id, req.body))
    } catch (err) {
        console.error(`Error while updating group`, err.message);
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        res.json(await group.remove(req.params.id))
    } catch (err) {
        console.error(`Error while deleting group`, err.message);
        next(err);
    }
}

module.exports = {
    get,
    getMultiple,
    create,
    update,
    remove
}