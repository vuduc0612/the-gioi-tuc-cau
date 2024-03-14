--tao ban ghi cart moi va gan cartID cho user hien tai

DECLARE @userId INT;
SET @userId = 1; --thay doi gia tri nay khi muon tao cart cho user_id khac

INSERT INTO [cart]
VALUES (@userId, 0.00);

DECLARE @newCartId INT;
SET @newCartId = SCOPE_IDENTITY();

UPDATE [user]
SET current_cart = @newCartId
WHERE user_id = @userId;