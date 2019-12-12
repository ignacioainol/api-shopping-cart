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

const save = async (name, price, description) => {
    const conexion = await conn();
    const query = `
        INSERT INTO products (name, price, description)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const result = await conexion.query(query, [name, price, description])
    conexion.release();
    return result.rows;
}

const update = async (id, productData) => {
    const conexion = await conn();
    const query = `
        UPDATE products
        SET name = $1, price = $2, description = $3
        WHERE id = $4
        RETURNING *
    `;

    const result = await conexion.query(query, [productData.name, productData.price, productData.description, id]);
    conexion.release();

    return result.rows[0];
}

const remove = async (id) => {
    const conexion = await conn();
    const query = `
        DELETE
        FROM products 
        WHERE id = $1
        RETURNING *`;

    const result = await conexion.query(query, [id]);
    conexion.release();
    return result;

}

module.exports = {
    getAll,
    getProductById,
    save,
    remove,
    update
}