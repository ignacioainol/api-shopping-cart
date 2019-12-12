const { conn } = require("./connection");

const getAll = async () => {
    const conexion = await conn();
    const query = `
        SELECT *
        FROM products`;

    const result = await conexion.query(query);
    conexion.release();
    return result.rows;    
}

const getProductById = async (id) => {
    const conexion = await conn();
    const query = `
        SELECT *
        FROM products 
        WHERE id = $1`;

    const result = await conexion.query(query, [id]);
    conexion.release()
    return result.rows;
}

module.exports = {
    getAll,
    getProductById
}