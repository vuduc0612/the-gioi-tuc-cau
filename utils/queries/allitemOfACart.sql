DECLARE @cartId INT;
SET @cartId = 1; --thay doi gia tri nay

SELECT i.item_id, i.cart_id, i.sku, i.quantity,
       p.product_id, p.name as product_name, p.description as product_description, p.price as product_price, p.color as product_color,
       pi.url as product_image_url
FROM [item] i
JOIN [inventory] inv ON i.sku = inv.sku
JOIN [product] p ON inv.product_id = p.product_id
CROSS APPLY (
    SELECT TOP 1 url
    FROM [productImage] pi
    WHERE p.product_id = pi.product_id
    ORDER BY img_id
) pi
WHERE i.cart_id = @cartId;