const db = require('../data/dbConfig');

module.exports = {
    insert,
//    update,
//    remove,
    getAll,
    findById,
//    findByTitle,

}

async function insert() {
    const [id] = await db('games').insert(game);

    return findById(id);
}

async function getAll() {
    return db('games');
}

async function findById() {
    return db('games')
    .where({id})
    .first();
}