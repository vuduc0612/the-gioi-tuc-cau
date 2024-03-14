--tao ban ghi user moi, ban ghi cart moi va gan cartID cho user

INSERT INTO [user] (username, password)
VALUES ('newuser2', 'password123');

DECLARE @newUserId INT;
SET @newUserId = SCOPE_IDENTITY();

INSERT INTO [cart]
VALUES (@newUserId, 0.00);

DECLARE @newCartId INT;
SET @newCartId = SCOPE_IDENTITY();

UPDATE [user]
SET current_cart = @newCartId
WHERE user_id = @newUserId;