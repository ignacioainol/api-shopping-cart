const { Pool } = require("pg");

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "moto_store",
    password : "postgres"
});

const conn = async () => {
    const client = await pool.connect();
    return client;
};

exports.conn = conn;