-- The SQL should be able to add a new product to the products table.
-- The SQL should have four parameters ( name, description, price, image_url ).

INSERT INTO product ( name, description, price, image_url ) 
    VALUES ( $1, $2, $3, $4 );