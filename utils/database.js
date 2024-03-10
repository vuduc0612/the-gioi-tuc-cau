// database.js

import sql from "mssql";

const config = {
    user: 'sa',
    password: '12345',
    server: 'localhost',
    database: 'the-gioi-tuc-cau',
    options: {
        encrypt: false
    }
};

const pool = new sql.ConnectionPool(config);

const connectDatabase = async () => {
    try {
        await pool.connect();
        console.log('Connected to SQL Server');
    } catch (error) {
        console.error('Failed to connect to SQL Server', error);
        throw error;
    }
};

const closeDatabase = async () => {
    try {
        await pool.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error closing database connection:', error);
        throw error;
    }
};

const queryDatabase = async (query) => {
    try {
        const request = pool.request();
        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error('Error querying database:', error);
        throw error;
    }
};

export { connectDatabase, closeDatabase, queryDatabase };