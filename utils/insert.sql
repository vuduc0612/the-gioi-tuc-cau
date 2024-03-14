-- insert du lieu mac dinh ban dau cho 4 bang: category, product, productImage, inventory

INSERT INTO [category] VALUES
(N'Nike', N'Giày chính hãng nike'),
(N'Adidas', N'Giày chính hãng addidas'),
(N'Mizuno', N'Giày chính hãng mizuno'),
(N'Bóng đá', N'Bóng đá chính hãng'),
(N'Găng tay', N'Găng tay chính hãng'),
(N'Tất chân', N'Tất chống trơn'),
(N'Băng keo', N'Băng keo bảo vệ cổ chân');

INSERT INTO [product] VALUES
-- adidas
('ADIDAS X CRAZYFAST.3 TF', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Speedskin V2 mỏng nhẹ.
- Công nghệ: Cổ thun ôm chân, đế 2 khuôn mới và Stability wing chắc chắn.
', 600000, N'Đen', 2),
('ADIDAS X CRAZYFAST.3 TF', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Speedskin V2 mỏng nhẹ.
- Công nghệ: Cổ thun ôm chân, đế 2 khuôn mới và Stability wing chắc chắn.
', 600000, N'Xanh dương', 2),
('ADIDAS X CRAZYFAST.3 TF', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Speedskin V2 mỏng nhẹ.
- Công nghệ: Cổ thun ôm chân, đế 2 khuôn mới và Stability wing chắc chắn.
', 600000, N'Xanh lá', 2),
-- nike
('NIKE PHANTOM LUNA 2 ACADEMY', N'- Năm sản xuất: 2024.
- Chất liệu: Flyknit
- Công nghệ: Upper làm từ sợi dệt Flyknit siêu mỏng và nhẹ, Phủ lên trên upper đó là công nghệ ACC (Conditions Control), 
mũi giày có các vân tròn dập nổi Strike Zone, Đệm React Pro trợ lực, Lưỡi gà lệch chéo với chất liệu Flyknit ôm gọn chân giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân
', 400000, N'Trắng', 1),
('NIKE PHANTOM LUNA 2 ACADEMY', N'- Năm sản xuất: 2024.
- Chất liệu: Flyknit
- Công nghệ: Upper làm từ sợi dệt Flyknit siêu mỏng và nhẹ, Phủ lên trên upper đó là công nghệ ACC (Conditions Control), 
mũi giày có các vân tròn dập nổi Strike Zone, Đệm React Pro trợ lực, Lưỡi gà lệch chéo với chất liệu Flyknit ôm gọn chân giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân
', 400000, N'Đen', 1),
('NIKE PHANTOM LUNA 2 ACADEMY', N'- Năm sản xuất: 2024.
- Chất liệu: Flyknit
- Công nghệ: Upper làm từ sợi dệt Flyknit siêu mỏng và nhẹ, Phủ lên trên upper đó là công nghệ ACC (Conditions Control), 
mũi giày có các vân tròn dập nổi Strike Zone, Đệm React Pro trợ lực, Lưỡi gà lệch chéo với chất liệu Flyknit ôm gọn chân giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân
', 400000, N'Xanh lá', 1),

('NIKE PHANTOM GX ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: da tổng hợp kết hợp lớp phủ Nikeskin hình xoắn ốc
- Công nghệ: Ghost Lace độc quyền giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân, cổ thun Dynamic Fit sẽ giúp ôm trọn cổ chân
', 700000, N'Đen', 1),
('NIKE PHANTOM GX ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: da tổng hợp kết hợp lớp phủ Nikeskin hình xoắn ốc
- Công nghệ: Ghost Lace độc quyền giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân, cổ thun Dynamic Fit sẽ giúp ôm trọn cổ chân
', 700000, N'Đỏ', 1),
('NIKE PHANTOM GX ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: da tổng hợp kết hợp lớp phủ Nikeskin hình xoắn ốc
- Công nghệ: Ghost Lace độc quyền giúp tăng diện tích mặt tiếp xúc bóng ở mu bàn chân, cổ thun Dynamic Fit sẽ giúp ôm trọn cổ chân
', 700000, N'Xanh', 1),

('NIKE MERCURIAL VAPOR 15 ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Nikeskin mới mềm mại và bám bóng.
- Công nghệ: Đế đệm Airzoom cao cấp êm ái, lưỡi gà rời thoải mái và đế Nike Grind tái chế bám sân.
', 550000, N'Be', 1),
('NIKE MERCURIAL VAPOR 15 ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Nikeskin mới mềm mại và bám bóng.
- Công nghệ: Đế đệm Airzoom cao cấp êm ái, lưỡi gà rời thoải mái và đế Nike Grind tái chế bám sân.
', 550000, N'Đen', 1),
('NIKE MERCURIAL VAPOR 15 ACADEMY', N'- Năm sản xuất: 2023.
- Chất liệu: Da tổng hợp Nikeskin mới mềm mại và bám bóng.
- Công nghệ: Đế đệm Airzoom cao cấp êm ái, lưỡi gà rời thoải mái và đế Nike Grind tái chế bám sân.
', 550000, N'Xanh', 1),

('NIKE MERCURIAL SUPERFLY 9 CLUB', N'- Năm sản xuất: 2023. 
- Chất liệu: da tổng hợp
- Công nghệ: khuôn đế nike grind, đinh dạng hình thoi
- Form giày: Phù hợp form chân thon/chân bè', 500000, N'Be', 1),
('NIKE MERCURIAL SUPERFLY 9 CLUB', N'- Năm sản xuất: 2023. 
- Chất liệu: da tổng hợp
- Công nghệ: khuôn đế nike grind, đinh dạng hình thoi
- Form giày: Phù hợp form chân thon/chân bè', 500000, N'Đen', 1),
('NIKE MERCURIAL SUPERFLY 9 CLUB', N'- Năm sản xuất: 2023. 
- Chất liệu: da tổng hợp
- Công nghệ: khuôn đế nike grind, đinh dạng hình thoi
- Form giày: Phù hợp form chân thon/chân bè', 500000, N'Trắng', 1),

('NIKE PHANTOM GX ELITE FG', N'- Năm sản xuất: 2023
- Chất liệu: Nike Gripknit ( liệu da vải sợi dệt) 
- Công nghệ: Cổ thun Dynamic Fit, ACC (ọi thời tiết), khuôn đế The tri-star studs, lót NikeGrip chống trượt.', 500000, N'Đen', 1),
('NIKE PHANTOM GX ELITE FG', N'- Năm sản xuất: 2023
- Chất liệu: Nike Gripknit ( liệu da vải sợi dệt) 
- Công nghệ: Cổ thun Dynamic Fit, ACC (ọi thời tiết), khuôn đế The tri-star studs, lót NikeGrip chống trượt.', 500000, N'Xanh lá', 1),
('NIKE PHANTOM GX ELITE FG', N'- Năm sản xuất: 2023
- Chất liệu: Nike Gripknit ( liệu da vải sợi dệt) 
- Công nghệ: Cổ thun Dynamic Fit, ACC (ọi thời tiết), khuôn đế The tri-star studs, lót NikeGrip chống trượt.', 500000, N'Đỏ', 1),

('NIKE PREMIER 3', N'- Năm sản xuất: 2022
- Chất liệu: Da tổng hợp Nikeskin kết hợp đường vân GT thế hệ thứ 2
- Công nghệ: Cổ thun Flyknit, ACC (ọi thời tiết), khuôn đế Hyper Quick System bám sân, lót NikeGrip chống trượt
- Form giày: Phù hợp form chân thon/chân bè.', 500000, N'Đen', 1),
('NIKE PREMIER 3', N'- Năm sản xuất: 2022
- Chất liệu: Da tổng hợp Nikeskin kết hợp đường vân GT thế hệ thứ 2
- Công nghệ: Cổ thun Flyknit, ACC (ọi thời tiết), khuôn đế Hyper Quick System bám sân, lót NikeGrip chống trượt
- Form giày: Phù hợp form chân thon/chân bè.', 500000, N'Be', 1),
('NIKE PREMIER 3', N'- Năm sản xuất: 2022
- Chất liệu: Da tổng hợp Nikeskin kết hợp đường vân GT thế hệ thứ 2
- Công nghệ: Cổ thun Flyknit, ACC (ọi thời tiết), khuôn đế Hyper Quick System bám sân, lót NikeGrip chống trượt
- Form giày: Phù hợp form chân thon/chân bè.', 500000, N'Bạc', 1),
-- mizuno
('MIZUNO MORELIA NEO IV PRO', N'- Năm sản xuất: 2023
- Chất liệu: Da Kangaroo cao cấp mềm mại
- Công nghệ: Đế đệm giảm chấn êm ái, lót đệm chống trượt
- Form giày: Phù hợp form chân thon/chân bè.', 500000, N'Đỏ', 3),
('MIZUNO MORELIA NEO IV PRO', N'- Năm sản xuất: 2023
- Chất liệu: Da Kangaroo cao cấp mềm mại
- Công nghệ: Đế đệm giảm chấn êm ái, lót đệm chống trượt
- Form giày: Phù hợp form chân thon/chân bè.', 500000, N'Trắng', 3),
-- bong da
(N'NIKE FOOTBALL ACADEMY', N'- Công nghệ Nike Aerowsculpt sử dụng các rãnh đúc để phá vỡ luồng không khí đi qua quả bóng để giảm lực cản và bay ổn định hơn.
- Thiết kế màu sắc có độ tương phản cao giúp bạn dễ dàng theo dõi đường bóng.
- Thiết kế 12 tấm mang lại đường bay bóng chân thực và chính xác.', 799000, N'Trắng Cam', 4),
(N'NIKE FOOTBALL ACADEMY', N'- Công nghệ Nike Aerowsculpt sử dụng các rãnh đúc để phá vỡ luồng không khí đi qua quả bóng để giảm lực cản và bay ổn định hơn.
- Thiết kế màu sắc có độ tương phản cao giúp bạn dễ dàng theo dõi đường bóng.
- Thiết kế 12 tấm mang lại đường bay bóng chân thực và chính xác.', 799000, N'Trắng xanh', 4),

(N'NIKE FOOTBALL FLIGHT', N'- Công nghệ Nike Aerowsculpt sử dụng các rãnh đúc để phá vỡ luồng không khí đi qua quả bóng để giảm lực cản và bay ổn định hơn.
- Công nghệ Kiểm soát mọi điều kiện ( bổ sung thêm kết cấu bám dính trong cả điều kiện ẩm ướt và khô.
- Lớp phủ mực in 3D tinh chỉnh đường bay của bóng để giúp bạn đánh trúng mục tiêu sau cú sút, chuyền nối tiếp đường chuyền.', 899000, N'Trắng', 4),

(N'ADIDAS FOOTBALL LEAGUE', N'- Bề mặt : khâu máy
- Chất liệu vỏ :vỏ bóng làm từ 100% TPU 
- Ruột bóng : Ruột bóng bằng cao su butyl.
- Chứng nhận FIFA Quality Pro: Đây là chứng nhận chất lượng tốt nhất theo đánh giá của FIFA sau các thử nghiệm về độ chuẩn của chu vi, cân nặng, độ nảy và độ thấm nước.
- Huy hiệu in Champion League: Huy hiệu chỉ dành riêng cho những trái bóng đã đạt chuẩn thi đấu và sẽ chính thức xuất hiện trong các trận đấu của Cúp C1.', 599000, N'Trắng', 4),

(N'ADIDAS FOOTBALL TRAINING', N'- Bề mặt : khâu máy
- Chất liệu vỏ :vỏ bóng làm từ 100% TPU 
- Ruột bóng : Ruột bóng bằng cao su butyl.', 399000, N'Trắng', 4),
-- gang tay
('NIKE GLOVES', N'Lớp đệm trong lòng bàn tay cung cấp giúp hấp thụ va chạm.Phối lưới thoáng khí cho cảm giác mát mẻ, khô ráo. Bề mặt lòng bàn tay nhẵn giúp bạn cầm bóng tốt hơn. Dây đeo cổ tay có thể điều chỉnh tạo sự vừa vặn an toàn.', 600000, N'Đỏ', 5),
('NIKE GLOVES', N'Lớp đệm trong lòng bàn tay cung cấp giúp hấp thụ va chạm.Phối lưới thoáng khí cho cảm giác mát mẻ, khô ráo. Bề mặt lòng bàn tay nhẵn giúp bạn cầm bóng tốt hơn. Dây đeo cổ tay có thể điều chỉnh tạo sự vừa vặn an toàn.', 600000, N'Đen', 5),
('NIKE GLOVES', N'Lớp đệm trong lòng bàn tay cung cấp giúp hấp thụ va chạm.Phối lưới thoáng khí cho cảm giác mát mẻ, khô ráo. Bề mặt lòng bàn tay nhẵn giúp bạn cầm bóng tốt hơn. Dây đeo cổ tay có thể điều chỉnh tạo sự vừa vặn an toàn.', 600000, N'Xanh', 5),

('ADIDAS PREDATOR', N'Vân High Definition Texture dập chìm trên mu bàn tay tăng cường độ chính xác khi đưa bóng ra khỏi khung thành, còn lòng bàn tay Soft Grip giúp bạn bắt trọn những cú sút chéo góc và bóng xoáy khó nhằn. Quai đeo 1/2 cố định và chắc chắn tiếp thêm tự tin trong lúc tập luyện. Sản phẩm này có chứa tối thiểu 50% hỗn hợp chất liệu tái chế và có thể tái tạo.', 550000, N'Trắng', 5),
('ADIDAS PREDATOR', N'Vân High Definition Texture dập chìm trên mu bàn tay tăng cường độ chính xác khi đưa bóng ra khỏi khung thành, còn lòng bàn tay Soft Grip giúp bạn bắt trọn những cú sút chéo góc và bóng xoáy khó nhằn. Quai đeo 1/2 cố định và chắc chắn tiếp thêm tự tin trong lúc tập luyện. Sản phẩm này có chứa tối thiểu 50% hỗn hợp chất liệu tái chế và có thể tái tạo.', 550000, N'Đen', 5),
('ADIDAS PREDATOR', N'Vân High Definition Texture dập chìm trên mu bàn tay tăng cường độ chính xác khi đưa bóng ra khỏi khung thành, còn lòng bàn tay Soft Grip giúp bạn bắt trọn những cú sút chéo góc và bóng xoáy khó nhằn. Quai đeo 1/2 cố định và chắc chắn tiếp thêm tự tin trong lúc tập luyện. Sản phẩm này có chứa tối thiểu 50% hỗn hợp chất liệu tái chế và có thể tái tạo.', 550000, N'Xanh', 5),
-- tat chan
('ADIDAS SOCKS', N'- Chiều dài đến đầu gối
- 99% polyester tái chế, 1% elastane
- Nâng đỡ vòm bàn chân
- Vải lưới thoáng khí', 30000, N'Trắng', 6),
('ADIDAS SOCKS', N'- Chiều dài đến đầu gối
- 99% polyester tái chế, 1% elastane
- Nâng đỡ vòm bàn chân
- Vải lưới thoáng khí', 30000, N'Đen', 6),

('NIKE CLASSIC', N'- Năm sản xuất: 2022.
- Chất liệu: 98% nylon/2% elastane.
- Công nghệ: Dri-Fit khô thoáng.', 600000, N'Trắng', 6),
('NIKE CLASSIC', N'- Năm sản xuất: 2022.
- Chất liệu: 98% nylon/2% elastane.
- Công nghệ: Dri-Fit khô thoáng.', 600000, N'Đen', 6),
-- bang keo
(N'Băng Keo', N'- Sản phẩm đặc thù dành cho Vận động viên, người tập luyện các bộ môn thể thao khác nhau băng dán để trị liệu; hồi phục các tổn thương cơ bắp trên tứ chi của cơ thể. Chất liệu: xốp mềm co dãn
- Nhờ có lớp keo dính đặc biệt, người sử dụng vẫn có thể tiếp xúc với môi trường nước mà không hề bị bong ra như những loại băng dán thông thường khác.', 600000, N'Ngẫu nhiên', 7);

INSERT INTO [productImage] VALUES
-- adidas
(1, N'/products/adidas/xCrazyFastTF/black-1.png'),
(1, N'/products/adidas/xCrazyFastTF/black-2.png'),
(1, N'/products/adidas/xCrazyFastTF/black-3.png'),
(1, N'/products/adidas/xCrazyFastTF/black-4.png'),

(2, N'/products/adidas/xCrazyFastTF/blue-1.png'),
(2, N'/products/adidas/xCrazyFastTF/blue-2.png'),
(2, N'/products/adidas/xCrazyFastTF/blue-3.png'),
(2, N'/products/adidas/xCrazyFastTF/blue-4.png'),

(3, N'/products/adidas/xCrazyFastTF/green-1.png'),
(3, N'/products/adidas/xCrazyFastTF/green-2.png'),
(3, N'/products/adidas/xCrazyFastTF/green-3.png'),
(3, N'/products/adidas/xCrazyFastTF/green-4.png'),
-- nike
(4, N'/products/nike/phantomLuna2Academy/white-1.png'),
(4, N'/products/nike/phantomLuna2Academy/white-2.png'),
(4, N'/products/nike/phantomLuna2Academy/white-3.png'),
(4, N'/products/nike/phantomLuna2Academy/white-4.png'),

(5, N'/products/nike/phantomLuna2Academy/black-1.png'),
(5, N'/products/nike/phantomLuna2Academy/black-2.png'),
(5, N'/products/nike/phantomLuna2Academy/black-3.png'),
(5, N'/products/nike/phantomLuna2Academy/black-4.png'),

(6, N'/products/nike/phantomLuna2Academy/green-1.png'),
(6, N'/products/nike/phantomLuna2Academy/green-2.png'),
(6, N'/products/nike/phantomLuna2Academy/green-3.png'),
(6, N'/products/nike/phantomLuna2Academy/green-4.png'),

(7, N'/products/nike/phantomGXAcademy/black-1.png'),
(7, N'/products/nike/phantomGXAcademy/black-2.png'),
(7, N'/products/nike/phantomGXAcademy/black-3.png'),
(7, N'/products/nike/phantomGXAcademy/black-4.png'),

(8, N'/products/nike/phantomGXAcademy/red-1.png'),
(8, N'/products/nike/phantomGXAcademy/red-2.png'),
(8, N'/products/nike/phantomGXAcademy/red-3.png'),
(8, N'/products/nike/phantomGXAcademy/red-4.png'),

(9, N'/products/nike/phantomGXAcademy/blue-1.png'),
(9, N'/products/nike/phantomGXAcademy/blue-2.png'),
(9, N'/products/nike/phantomGXAcademy/blue-3.png'),
(9, N'/products/nike/phantomGXAcademy/blue-4.png'),

(10, N'/products/nike/mercurialVapor15Academy/be-1.png'),
(10, N'/products/nike/mercurialVapor15Academy/be-2.png'),
(10, N'/products/nike/mercurialVapor15Academy/be-3.png'),
(10, N'/products/nike/mercurialVapor15Academy/be-4.png'),

(11, N'/products/nike/mercurialVapor15Academy/black-1.png'),
(11, N'/products/nike/mercurialVapor15Academy/black-2.png'),
(11, N'/products/nike/mercurialVapor15Academy/black-3.png'),
(11, N'/products/nike/mercurialVapor15Academy/black-4.png'),

(12, N'/products/nike/mercurialVapor15Academy/blue-1.png'),
(12, N'/products/nike/mercurialVapor15Academy/blue-2.png'),
(12, N'/products/nike/mercurialVapor15Academy/blue-3.png'),
(12, N'/products/nike/mercurialVapor15Academy/blue-4.png'),

(13, N'/products/nike/mercurialSuperfly9Club/be-1.png'),
(13, N'/products/nike/mercurialSuperfly9Club/be-2.png'),
(13, N'/products/nike/mercurialSuperfly9Club/be-3.png'),
(13, N'/products/nike/mercurialSuperfly9Club/be-4.png'),

(14, N'/products/nike/mercurialSuperfly9Club/black-1.png'),
(14, N'/products/nike/mercurialSuperfly9Club/black-2.png'),
(14, N'/products/nike/mercurialSuperfly9Club/black-3.png'),
(14, N'/products/nike/mercurialSuperfly9Club/black-4.png'),

(15, N'/products/nike/mercurialSuperfly9Club/white-1.png'),
(15, N'/products/nike/mercurialSuperfly9Club/white-2.png'),
(15, N'/products/nike/mercurialSuperfly9Club/white-3.png'),
(15, N'/products/nike/mercurialSuperfly9Club/white-4.png'),

(16, N'/products/nike/phantomGxEliteFg/black-1.png'),
(16, N'/products/nike/phantomGxEliteFg/black-2.png'),
(16, N'/products/nike/phantomGxEliteFg/black-3.png'),
(16, N'/products/nike/phantomGxEliteFg/black-4.png'),

(17, N'/products/nike/phantomGxEliteFg/green-1.png'),
(17, N'/products/nike/phantomGxEliteFg/green-2.png'),
(17, N'/products/nike/phantomGxEliteFg/green-3.png'),
(17, N'/products/nike/phantomGxEliteFg/green-4.png'),

(18, N'/products/nike/phantomGxEliteFg/red-1.png'),
(18, N'/products/nike/phantomGxEliteFg/red-2.png'),
(18, N'/products/nike/phantomGxEliteFg/red-3.png'),
(18, N'/products/nike/phantomGxEliteFg/red-4.png'),

(19, N'/products/nike/premier3/black-1.png'),
(19, N'/products/nike/premier3/black-2.png'),
(19, N'/products/nike/premier3/black-3.png'),
(19, N'/products/nike/premier3/black-4.png'),

(20, N'/products/nike/premier3/be-1.png'),
(20, N'/products/nike/premier3/be-2.png'),
(20, N'/products/nike/premier3/be-3.png'),
(20, N'/products/nike/premier3/be-4.png'),

(21, N'/products/nike/premier3/silver-1.png'),
(21, N'/products/nike/premier3/silver-2.png'),
(21, N'/products/nike/premier3/silver-3.png'),
(21, N'/products/nike/premier3/silver-4.png'),
-- mizuno
(22, N'/products\mizuno\moreliaNeoPro\red-1.webp'),
(22, N'/products\mizuno\moreliaNeoPro\red-2.webp'),
(22, N'/products\mizuno\moreliaNeoPro\red-3.webp'),
(22, N'/products\mizuno\moreliaNeoPro\red-4.webp'),

(23, N'/products\mizuno\moreliaNeoPro\white-1.webp'),
(23, N'/products\mizuno\moreliaNeoPro\white-2.webp'),
(23, N'/products\mizuno\moreliaNeoPro\white-3.webp'),
(23, N'/products\mizuno\moreliaNeoPro\white-4.webp'),
-- bong da
(24, N'/products\ball\nikeAcademy\orange-1.png'),

(25, N'/products\ball\nikeAcademy\green-1.png'),

(26, N'/products\ball\nikeFlight\red-1.webp'),

(27, N'/products\ball\adidasLeagueBall\blue-1.webp'),

(28, N'/products\ball\adidasTrainningBall\blue-1.webp'),

-- gang tay
(29, N'/products\glove\nikeGloves\red-1.png'),

(30, N'/products\glove\nikeGloves\black-1.png'),

(31, N'/products\glove\nikeGloves\green-1.png'),

(32, N'/products\glove\adidasPredator\white-1.webp'),

(33, N'/products\glove\adidasPredator\black-1.jpg'),

(34, N'/products\glove\adidasPredator\blue-1.webp'),

-- tat chan
(35, N'/products\sock\adidas\white-1.webp'),
(35, N'/products\sock\adidas\white-2.webp'),

(36, N'/products\sock\adidas\black-1.webp'),
(36, N'/products\sock\adidas\black-2.jpeg'),

(37, N'/products\sock\nikeClassic\white-1.webp'),

(38, N'/products\sock\nikeClassic\black-1.webp'),

-- bang keo
(39, N'/products\tape\blue-1.jpg'),
(39, N'/products\tape\red-1.jpg'),
(39, N'/products\tape\orange-1.jpg'),
(39, N'/products\tape\black-1.jpg'),
(39, N'/products\tape\violet-1.jpg');

-- Chen du lieu cho cac san pham giay bong da (category 1->3) co size tu 38-44 voi so luong 30
INSERT INTO [inventory] (product_id, size, quantity)
SELECT p.product_id, 
       s.size as size,
       30 as quantity
FROM [product] p
CROSS JOIN (
    VALUES (38), (39), (40), (41), (42), (43), (44)
) s(size)
WHERE p.category_id <= 3;

-- CHen du lieu cho cac san pham phu kien (category>3) voi so luong 30 va khong co size
INSERT INTO [inventory] (product_id, quantity)
SELECT p.product_id, 
       30 as quantity
FROM [product] p
WHERE p.category_id > 3;
