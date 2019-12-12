const { conn } = require("./connection");

const getAll = async () => {
    const conexion = await conn();
    const query = `
        SELECT *
        FROM
        products
    `;
    const result = await conexion.query(query);
    conexion.release();
    return result.rows;    
}

module.exports = {
    getAll
}