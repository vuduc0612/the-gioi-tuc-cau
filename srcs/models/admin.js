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
                inv.size AS product_size,
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
                inv.size,
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
            SELECT 
                p.product_id,
                p.name AS product_name,
                p.description AS product_description,
                p.price AS product_price,
                p.color AS product_color,
                inv.sku AS sku,
                inv.size AS inventory_size,
                inv.quantity AS inventory_quantity,
                c.category_id AS category_id,
                c.name AS category_name,
                c.description AS category_description,
                (
                    SELECT TOP 1 url 
                    FROM productImage 
                    WHERE product_id = p.product_id
                ) AS product_image
            FROM 
                product p
            JOIN 
                inventory inv ON p.product_id = inv.product_id
            JOIN 
                category c ON p.category_id = c.category_id
            WHERE 
                p.product_id = ${product_id};
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

async function getCategoryDatas() {
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT * FROM [dbo].[category];
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

async function getInventoryDatasByProductId(product_id) {
    try {
        const request = pool.request();
        const result = await request.query(`
            SELECT * FROM [dbo].[inventory] WHERE [product_id] = ${product_id};
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

async function updateProductInformation(newProductDatas) {
    try {
        const request = pool.request();
        const productId = newProductDatas.product_id;
        request.input('productId', newProductDatas.product_id);
        request.input('name', newProductDatas.product_name);
        request.input('description', newProductDatas.product_description);
        request.input('price', newProductDatas.product_price);
        request.input('color', newProductDatas.product_color);
        request.input('categoryId', newProductDatas.product_category);
        
        // Cập nhật thông tin của sản phẩm
        const updateProductQuery = `
            UPDATE product
            SET 
                name = @name,
                description = @description,
                price = @price,
                color = @color,
                category_id = @categoryId
            WHERE
                product_id = @productId;
        `;
        
        // Thực thi truy vấn cập nhật thông tin sản phẩm
        await request.query(updateProductQuery);

        // Cập nhật số lượng tồn kho của sản phẩm
        for (let size=38; size<=44; size++) {
            const quantity = newProductDatas[size.toString()];
            await request.query(`
                UPDATE inventory
                SET 
                    quantity = ${quantity}
                WHERE
                    product_id = ${productId}
                    AND size = ${size}
            `);
        }
        
        return true; // Trả về true nếu cập nhật thành công
    } catch (error) {
        console.error('Error updating product information:', error);
        throw error;
    }
}


const admin = { getAllBills, getAllProducts, getProductById, getBillById, getCategoryDatas, getInventoryDatasByProductId, updateProductInformation};
export { admin };