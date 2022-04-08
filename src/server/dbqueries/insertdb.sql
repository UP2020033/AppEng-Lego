SET datestyle = dmy;

-- Customer Test insert
INSERT INTO customer (email_address) values ('testuser@test.com');

-- Orders inserts
INSERT INTO orders (delivery_address_line_1, delivery_address_line_2, delivery_city, delivery_county, delivery_postcode, order_date, order_cost, customer_id) VALUES ('5 Mill Close', 'Poynings', 'Brighton', 'West Sussex', 'BN457AF', '07/04/2022', '10.00', 1);
INSERT INTO orders (delivery_address_line_1, delivery_address_line_2, delivery_city, delivery_county, delivery_postcode, order_date, order_cost, customer_id) VALUES ('5 Mill Close', 'Poynings', 'Brighton', 'West Sussex', 'BN457AF', '07/04/2022', '10.00', 1);
INSERT INTO orders (delivery_address_line_1, delivery_address_line_2, delivery_city, delivery_county, delivery_postcode, order_date, order_cost, customer_id) VALUES ('5 Mill Close', 'Poynings', 'Brighton', 'West Sussex', 'BN457AF', '07/04/2022', '10.00', 1);

-- Products inserts
-- Bricks
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 1x1 Lego Brick', '00.05', 'brick-black1x1', 'Black', 'Brick', NULL, 200);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 1x2 Lego Brick', '00.07', 'brick-black1x2', 'Black', 'Brick', NULL, 157);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 2x2 Lego Brick', '00.10', 'brick-black2x2', 'Black', 'Brick', NULL, 120);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 2x3 Lego Brick', '00.12', 'brick-black2x3', 'Black', 'Brick', NULL, 111);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 1x1 Lego Brick', '00.05', 'brick-blue1x1', 'Blue', 'Brick', NULL, 175);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 1x2 Lego Brick', '00.07', 'brick-blue1x2', 'Blue', 'Brick', NULL, 135);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 2x2 Lego Brick', '00.10', 'brick-blue2x2', 'Blue', 'Brick', NULL, 98);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 2x3 Lego Brick', '00.12', 'brick-blue2x3', 'Blue', 'Brick', NULL, 50);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 1x1 Lego Brick', '00.05', 'brick-brown1x1', 'Brown', 'Brick', NULL, 192);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 1x2 Lego Brick', '00.07', 'brick-brown1x2', 'Brown', 'Brick', NULL, 122);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 2x2 Lego Brick', '00.10', 'brick-brown2x2', 'Brown', 'Brick', NULL, 58);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 2x3 Lego Brick', '00.12', 'brick-brown2x3', 'Brown', 'Brick', NULL, 68);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 1x1 Lego Brick', '00.05', 'brick-green1x1', 'Green', 'Brick', NULL, 147);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 1x2 Lego Brick', '00.07', 'brick-green1x2', 'Green', 'Brick', NULL, 190);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 2x2 Lego Brick', '00.10', 'brick-green2x2', 'Green', 'Brick', NULL, 90);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 2x3 Lego Brick', '00.12', 'brick-green2x3', 'Green', 'Brick', NULL, 40);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 1x1 Lego Brick', '00.05', 'brick-orange1x1', 'Orange', 'Brick', NULL, 10);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 1x2 Lego Brick', '00.07', 'brick-orange1x2', 'Orange', 'Brick', NULL, 56);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 2x2 Lego Brick', '00.10', 'brick-orange2x2', 'Orange', 'Brick', NULL, 80);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 2x3 Lego Brick', '00.12', 'brick-orange2x3', 'Orange', 'Brick', NULL, 99);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 1x1 Lego Brick', '00.05', 'brick-red1x1', 'Red', 'Brick', NULL, 111);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 1x2 Lego Brick', '00.07', 'brick-red1x2', 'Red', 'Brick', NULL, 122);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 2x2 Lego Brick', '00.10', 'brick-red2x2', 'Red', 'Brick', NULL, 154);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 2x3 Lego Brick', '00.12', 'brick-red2x3', 'Red', 'Brick', NULL, 58);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 1x1 Lego Brick', '00.05', 'brick-white1x1', 'White', 'Brick', NULL, 140);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 1x2 Lego Brick', '00.07', 'brick-white1x2', 'White', 'Brick', NULL, 360);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 2x2 Lego Brick', '00.10', 'brick-white2x2', 'White', 'Brick', NULL, 55);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 2x3 Lego Brick', '00.12', 'brick-white2x3', 'White', 'Brick', NULL, 44);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 1x1 Lego Brick', '00.05', 'brick-yellow1x1', 'Yellow', 'Brick', NULL, 55);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 1x2 Lego Brick', '00.07', 'brick-yellow1x2', 'Yellow', 'Brick', NULL, 98);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 2x2 Lego Brick', '00.10', 'brick-yellow2x2', 'Yellow', 'Brick', NULL, 77);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 2x3 Lego Brick', '00.12', 'brick-yellow2x3', 'Yellow', 'Brick', NULL, 87);

-- Plates
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 1x1 Lego Plate', '00.12', 'plate-black1x1', 'Black', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 1x2 Lego Plate', '00.12', 'plate-black1x2', 'Black', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 2x2 Lego Plate', '00.12', 'plate-black2x2', 'Black', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 2x4 Lego Plate', '00.12', 'plate-black2x4', 'Black', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 1x1 Lego Plate', '00.12', 'plate-blue1x1', 'Blue', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 1x2 Lego Plate', '00.12', 'plate-blue1x2', 'Blue', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 2x2 Lego Plate', '00.12', 'plate-blue2x2', 'Blue', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 2x4 Lego Plate', '00.12', 'plate-blue2x4', 'Blue', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 1x1 Lego Plate', '00.12', 'plate-brown1x1', 'Brown', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 1x2 Lego Plate', '00.12', 'plate-brown1x2', 'Brown', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 2x2 Lego Plate', '00.12', 'plate-brown2x2', 'Brown', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 2x4 Lego Plate', '00.12', 'plate-brown2x4', 'Brown', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 1x1 Lego Plate', '00.12', 'plate-green1x1', 'Green', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 1x2 Lego Plate', '00.12', 'plate-green1x2', 'Green', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 2x2 Lego Plate', '00.12', 'plate-green2x2', 'Green', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 2x4 Lego Plate', '00.12', 'plate-green2x4', 'Green', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 1x1 Lego Plate', '00.12', 'plate-orange1x1', 'Orange', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 1x2 Lego Plate', '00.12', 'plate-orange1x2', 'Orange', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 2x2 Lego Plate', '00.12', 'plate-orange2x2', 'Orange', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 2x4 Lego Plate', '00.12', 'plate-orange2x4', 'Orange', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Pink 1x1 Lego Plate', '00.12', 'plate-pink1x1', 'Pink', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Pink 1x2 Lego Plate', '00.12', 'plate-pink1x2', 'Pink', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 1x1 Lego Plate', '00.12', 'plate-red1x1', 'Red', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 1x2 Lego Plate', '00.12', 'plate-red1x2', 'Red', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 2x2 Lego Plate', '00.12', 'plate-red2x2', 'Red', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 2x4 Lego Plate', '00.12', 'plate-red2x4', 'Red', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 1x1 Lego Plate', '00.12', 'plate-white1x1', 'White', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 1x2 Lego Plate', '00.12', 'plate-white1x2', 'White', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 2x2 Lego Plate', '00.12', 'plate-white2x2', 'White', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 2x4 Lego Plate', '00.12', 'plate-white2x4', 'White', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 1x1 Lego Plate', '00.12', 'plate-yellow1x1', 'Yellow', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 1x2 Lego Plate', '00.12', 'plate-yellow1x2', 'Yellow', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 2x2 Lego Plate', '00.12', 'plate-yellow2x2', 'Yellow', 'Plate', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 2x4 Lego Plate', '00.12', 'plate-yellow2x4', 'Yellow', 'Plate', NULL, 87);

-- Tiles
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 1x1 Lego Tile', '00.10', 'tile-black1x1', 'Black', 'Tile', NULL, 51);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black 2x2 Lego Tile', '00.15', 'tile-black2x2', 'Black', 'Tile', NULL, 36);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 1x1 Lego Tile', '00.10', 'tile-blue1x1', 'Blue', 'Tile', NULL, 47);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Blue 2x2 Lego Tile', '00.15', 'tile-blue2x2', 'Blue', 'Tile', NULL, 29);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 1x1 Lego Tile', '00.10', 'tile-brown1x1', 'Brown', 'Tile', NULL, 22);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Brown 2x2 Lego Tile', '00.15', 'tile-brown2x2', 'Brown', 'Tile', NULL, 51);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 1x1 Lego Tile', '00.10', 'tile-green1x1', 'Green', 'Tile', NULL, 71);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Green 2x2 Lego Tile', '00.15', 'tile-green2x2', 'Green', 'Tile', NULL, 32);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 1x1 Lego Tile', '00.10', 'tile-orange1x1', 'Orange', 'Tile', NULL, 11);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Orange 2x2 Lego Tile', '00.15', 'tile-orange2x2', 'Orange', 'Tile', NULL, 73);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Pink 1x1 Lego Tile', '00.10', 'tile-pink1x1', 'Pink', 'Tile', NULL, 17);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Pink 2x2 Lego Tile', '00.15', 'tile-pink2x2', 'Pink', 'Tile', NULL, 87);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 1x1 Lego Tile', '00.10', 'tile-red1x1', 'Red', 'Tile', NULL, 17);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Red 2x2 Lego Tile', '00.15', 'tile-red2x2', 'Red', 'Tile', NULL, 36);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 1x1 Lego Tile', '00.10', 'tile-white1x1', 'White', 'Tile', NULL, 77);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('White 2x2 Lego Tile', '00.15', 'tile-white2x2', 'White', 'Tile', NULL, 13);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 1x1 Lego Tile', '00.10', 'tile-yellow1x1', 'Yellow', 'Tile', NULL, 43);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Yellow 2x2 Lego Tile', '00.15', 'tile-yellow2x2', 'Yellow', 'Tile', NULL, 15);

-- Sets

-- LOTR
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Uruk-Hai battle set', '100.00', 'Uruk-Hai', NULL, 'Set', 'Lord of the Rings', 1);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Battle of Helms Deep set', '74.00', 'BattleOfHelmsDeep', NULL, 'Set', 'Lord of the Rings', 3);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Shelob spider set', '19.99', 'Shelob', NULL, 'Set', 'Lord of the Rings', 7);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('The Shire set', '170.00', 'TheShire', NULL, 'Set', 'Lord of the Rings', 4);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Tower of Orthanc', '120.00', 'TowerOfOrthanc', NULL, 'Set', 'Lord of the Rings', 3);
-- Star Wars
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('AT-AT set', '150.00', 'AT-AT', NULL, 'Set', 'Star Wars', 1);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('AT-ST set', '74.99', 'AT-ST', NULL, 'Set', 'Star Wars', 3);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('AT-TE set', '60.00', 'AT-TE', NULL, 'Set', 'Star Wars', 7);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('BB-8 set', '08.00', 'BB-8', NULL, 'Set', 'Star Wars', 4);
-- Pirates of the Caribbean
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Black Pearl set', '123.41', 'BlackPearl', NULL, 'Set', 'Pirates of the Caribbean', 1);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Fountain of Youth', '28.99', 'FountainOfYouth', NULL, 'Set', 'Pirates of the Caribbean', 6);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Jack Sparrow on boat set', '26.67', 'JackSparrowOnBoat', NULL, 'Set', 'Pirates of the Caribbean', 7);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Queen Annes Revenge set', '10.79', 'QueenAnnesRevenge', NULL, 'Set', 'Pirates of the Caribbean', 6);
INSERT INTO products (product_description, product_price, product_image_link, product_colour, product_category, product_theme, stock_count) VALUES ('Whitecap Bay set', '10.00', 'WhitecapBay', NULL, 'Set', 'Pirates of the Caribbean', 5);


-- Order Details inserts
INSERT INTO order_details (quantity, order_id, product_id)
VALUES (1, 1, 1);

