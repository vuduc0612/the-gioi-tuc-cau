import pool from "../../utils/database.js";

async function getAllBills() {
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT 
                o.order_id,
                o.order_date,
                o.address,
                c.total_price AS total_bill,
                u.username AS customer_name,
                STUFF(
                    (
                        SELECT ', ' + p.name
                        FROM 
                            item i
                        JOIN 
                            inventory inv ON i.sku = inv.sku
                        JOIN 
                            product p ON inv.product_id = p.product_id
                        WHERE 
                            i.cart_id = c.cart_id
                        FOR XML PATH('')
                    ), 
                    1, 2, ''
                ) AS products_array
            FROM 
                [order] o
            JOIN 
                cart c ON o.cart_id = c.cart_id
            JOIN 
                [user] u ON c.user_id = u.user_id;
        `)
        if (result) {
            //console.log(result.recordset);
            return result.recordset;
        }
        else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data from database:', error);
    }
}

async function getBillById(bill_id) {
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT 
                o.order_id,
                o.order_date,
                o.address AS customer_address,
                c.total_price AS total_bill,
                u.username AS customer_name,
                u.email AS customer_email,
                u.phone AS customer_phone,
                p.name AS product_name,
                p.price AS product_price,
                (SELECT TOP 1 url FROM productImage WHERE product_id = p.product_id) AS product_image,
                SUM(i.quantity) AS total_quantity
            FROM 
                [order] o
            JOIN 
                cart c ON o.cart_id = c.cart_id
            JOIN 
                [user] u ON c.user_id = u.user_id
            JOIN 
                item i ON c.cart_id = i.cart_id
            JOIN 
                inventory inv ON i.sku = inv.sku
            JOIN 
                product p ON inv.product_id = p.product_id
            WHERE 
                o.order_id = ${bill_id}
            GROUP BY 
                o.order_id,
                o.order_date,
                o.address,
                c.total_price,
                u.username,
                u.email,
                u.phone,
                p.product_id,
                p.name,
                p.price;
        `)
        if (result) {
            //console.log(result.recordset);
            return result.recordset;
        }
        else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data from database:', error);
    }
}


async function getAllProducts() {
    try {
        const request = pool.request();
        const result = await request.query(`
        SELECT p.product_id, p.name AS product_name, p.price, p.color, SUM(i.quantity) AS remaining_quantity,
        (
            SELECT TOP 1 url
            FROM productImage
            WHERE product_id = p.product_id
        ) AS product_image_url
        FROM 
            product p
        LEFT JOIN 
            inventory i ON p.product_id = i.product_id
        GROUP BY p.product_id, p.name, p.price, p.color;
        `)
        if (result) {
            //console.log(result.recordset);
            return result.recordset;
        }
        else {
            console.log('No data available');
            return null;
        }

    } catch (error) {
        console.error('Error fetching data from database:', error);
    }
}

async function getProductById(product_id) {
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT *
            FROM product
            WHERE product.product_id = ${product_id};
        `)
        if (result) {
            //console.log(result.recordset);
            return result.recordset[0];
        }
        else {
            console.log('No data available');
            return null;
        }

    } catch (error) {
        console.error('Error fetching data from database:', error);
    }
}

const admin = { getAllBills, getAllProducts, getProductById, getBillById};
export { admin };