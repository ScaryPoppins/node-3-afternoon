-- The SQL should be able to return a specific product from the product table.
-- The SQL should use a parameter to find the product whose product_id matches.

SELECT * FROM product WHERE product_id = $1;