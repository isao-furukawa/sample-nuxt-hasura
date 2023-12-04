-- インサート文 ---
INSERT INTO products (id, name, price, weight) VALUES
    ('090851fb-fbb8-4892-b2d7-766f73a42655', '{"ja": "りんご", "en": "apple", "vi": "Quả táo"}', 100, 0.2),
    ('7c5f6daf-b16f-42d1-ba22-af0a48bc243a', '{"ja": "みかん", "en": "orange", "vi": "Quả cam"}', 50, 0.1),
    ('17a15789-c683-4499-b01f-8da184845922', '{"ja": "ばなな", "en": "banana", "vi": "Quả chuối"}', 80, 0.3),
    ('2f622b13-130f-41e3-a6a4-a2416dbb9b57', '{"ja": "ぶどう", "en": "grape", "vi": "Quả nho"}', 120, 0.25),
    ('8893c40d-ddfd-49ed-9637-870a26898b58', '{"ja": "スイカ", "en": "watermelon", "vi": "Dưa hấu"}', 300, 1.0),
    ('f2839d3b-3f05-4c79-8765-cf3133160b91', '{"ja": "キウイ", "en": "kiwi", "vi": "Quả kiwi"}', 70, 0.15),
    ('a95162b3-af86-4af2-8dac-96bed2c0cd12', '{"ja": "パイナップル", "en": "pineapple", "vi": "Dứa"}', 200, 0.5),
    ('b82c394c-3a61-4364-9a3c-0d1095e4c65e', '{"ja": "マンゴー", "en": "mango", "vi": "Xoài"}', 150, 0.4),
    ('9e609a89-d37b-452e-99c2-340834e918cd', '{"ja": "桃", "en": "peach", "vi": "Quả đào"}', 90, 0.2),
    ('818e2043-b9fe-467c-aacc-b4c3ee9bcc7c', '{"ja": "メロン", "en": "melon", "vi": "Dưa lưới"}', 250, 0.8);

INSERT INTO users (id, first_name, family_name, gender, birthday) VALUES
    ('40bc12a8-99dd-4bf4-b2b9-ba6cb393b110', '{"ja": "太郎", "en": "Taro", "vi": "Khoai Môn"}', '{"ja": "山田", "en": "Yamada", "vi": "Yamada"}', 'M', '1965-05-15'),
    ('c468b044-e02e-45a7-890d-696bbf23104d', '{"ja": "花子", "en": "Hanako", "vi": "Hoa"}', '{"ja": "佐藤", "en": "Sato", "vi": "Sato"}', 'F', '1970-03-22'),
    ('6483fcb1-21f9-4ef3-9be1-9745e8421bd9', '{"ja": "健一", "en": "Kenichi", "vi": "Kien"}', '{"ja": "高橋", "en": "Takahashi", "vi": "Takahashi"}', 'M', '1980-11-08'),
    ('a19eb5cc-4573-43b5-be0b-cb27fa70a115', '{"ja": "美咲", "en": "Misaki", "vi": "Misaki"}', '{"ja": "田中", "en": "Tanaka", "vi": "Tanaka"}', 'F', '1975-01-14'),
    ('fc7a68ea-d8b9-4ded-b073-14bda61e6f6c', '{"ja": "直樹", "en": "Naoki", "vi": "Naoki"}', '{"ja": "伊藤", "en": "Ito", "vi": "Ito"}', 'M', '1968-09-30'),
    ('484b7d60-ff6c-4230-ba17-dc80a7a25bad', '{"ja": "絵里", "en": "Eri", "vi": "Eri"}', '{"ja": "渡辺", "en": "Watanabe", "vi": "Watanabe"}', 'F', '1983-02-17'),
    ('7b72d3e6-a263-4b2d-9e4c-70ee52138f4e', '{"ja": "大輔", "en": "Daisuke", "vi": "Daisuke"}', '{"ja": "中村", "en": "Nakamura", "vi": "Nakamura"}', 'M', '1978-07-05'),
    ('1e89aa32-b0d4-43af-b2e1-32281637bcfe', '{"ja": "ゆかり", "en": "Yukari", "vi": "Yukari"}', '{"ja": "小林", "en": "Kobayashi", "vi": "Kobayashi"}', 'F', '1967-12-24'),
    ('b9fc40b6-15c6-43b5-aa87-e152e52c7517', '{"ja": "亮", "en": "Ryo", "vi": "Ryo"}', '{"ja": "加藤", "en": "Kato", "vi": "Kato"}', 'M', '1984-04-12'),
    ('d9365bae-280b-4b9a-b25f-8e5630d0b729', '{"ja": "優子", "en": "Yuko", "vi": "Yuko"}', '{"ja": "吉田", "en": "Yoshida", "vi": "Yoshida"}', 'F', '1972-08-29'),
    ('0a4bdd9c-5dfe-47c7-bff1-485b2dd88c15', '{"ja": "秀樹", "en": "Hideki", "vi": "Hideki"}', '{"ja": "山本", "en": "Yamamoto", "vi": "Yamamoto"}', 'M', '1977-06-16'),
    ('0356746d-0fe2-4761-b7e5-f1e03c161bcd', '{"ja": "香織", "en": "Kaori", "vi": "Kaori"}', '{"ja": "松本", "en": "Matsumoto", "vi": "Matsumoto"}', 'F', '1981-10-03'),
    ('0e8fa69c-3f7a-46f7-a1bd-139e9a82c6eb', '{"ja": "浩二", "en": "Koji", "vi": "Koji"}', '{"ja": "斉藤", "en": "Saito", "vi": "Saito"}', 'M', '1962-01-19'),
    ('4b87511f-07df-4408-937f-ee17dc64cb7c', '{"ja": "真由美", "en": "Mayumi", "vi": "Mayumi"}', '{"ja": "鈴木", "en": "Suzuki", "vi": "Suzuki"}', 'F', '1969-03-31'),
    ('8f22afd5-658e-4a9e-b002-bc24bfac4572', '{"ja": "信二", "en": "Shinji", "vi": "Shinji"}', '{"ja": "小川", "en": "Ogawa", "vi": "Ogawa"}', 'M', '1982-05-27'),
    ('119c2b10-6ea3-4e0c-b885-16410fd3d74b', '{"ja": "千夏", "en": "Chinatsu", "vi": "Chinatsu"}', '{"ja": "石川", "en": "Ishikawa", "vi": "Ishikawa"}', 'F', '1976-09-10'),
    ('35fcb4ed-7d6c-4b86-9c62-2b9a509d1da6', '{"ja": "浩", "en": "Hiroshi", "vi": "Hiroshi"}', '{"ja": "中島", "en": "Nakajima", "vi": "Nakajima"}', 'M', '1985-07-21'),
    ('b2c0de3e-68f9-433b-a82d-da5c15b33948', '{"ja": "美香", "en": "Mika", "vi": "Mika"}', '{"ja": "山口", "en": "Yamaguchi", "vi": "Yamaguchi"}', 'F', '1973-11-13'),
    ('f1872dd9-2b9e-4943-a326-296d100e886f', '{"ja": "健太郎", "en": "Kentaro", "vi": "Kentaro"}', '{"ja": "森", "en": "Mori", "vi": "Mori"}', 'M', '1979-08-08'),
    ('81f405cc-2af1-4dd2-94c2-67d5478dbb58', '{"ja": "聡美", "en": "Satomi", "vi": "Satomi"}', '{"ja": "阿部", "en": "Abe", "vi": "Abe"}', 'F', '1986-12-25');

INSERT INTO receipts (id, user_id, purchase_date) VALUES
    ('c833b96c-cf37-4a95-bc91-e09874534f1d', '4b87511f-07df-4408-937f-ee17dc64cb7c', '2023-06-04 08:33:32'),
    ('c1e7dd85-6580-4577-a743-1ad644f95889', 'fc7a68ea-d8b9-4ded-b073-14bda61e6f6c', '2023-06-29 08:33:32'),
    ('f9a0aa19-07be-4438-99c0-6dc0efa4f10d', '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110', '2023-08-06 08:33:32'),
    ('d57736e0-33f9-4326-99e1-b67e76641496', '35fcb4ed-7d6c-4b86-9c62-2b9a509d1da6', '2023-01-08 08:33:32'),
    ('2d74b683-a368-40f1-a3ff-3980daed2f36', 'b2c0de3e-68f9-433b-a82d-da5c15b33948', '2023-04-24 08:33:32'),
    ('21a1b5b7-bba7-4804-b7e0-873b4bd55114', '8f22afd5-658e-4a9e-b002-bc24bfac4572', '2023-10-19 08:33:32'),
    ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '4b87511f-07df-4408-937f-ee17dc64cb7c', '2022-12-02 08:33:32'),
    ('b24b38a7-28bb-4201-a736-74e0b574dd6f', '35fcb4ed-7d6c-4b86-9c62-2b9a509d1da6', '2023-09-25 08:33:32'),
    ('c2ab5656-3753-49d1-b792-d33ac2dd7c65', 'f1872dd9-2b9e-4943-a326-296d100e886f', '2023-04-24 08:33:32'),
    ('d75d045c-362c-46bb-b579-ea61a46ab248', '4b87511f-07df-4408-937f-ee17dc64cb7c', '2023-11-14 08:33:32'),
    ('262a4096-231c-41ac-9bd6-27afe9ae27d8', '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110', '2023-03-31 08:33:32'),
    ('baf3596a-b9d8-4962-aacc-c5a456fd4057', 'a19eb5cc-4573-43b5-be0b-cb27fa70a115', '2023-08-22 08:33:32'),
    ('63df59c7-f913-4d5f-b281-629252ea716c', 'b9fc40b6-15c6-43b5-aa87-e152e52c7517', '2023-03-05 08:33:32'),
    ('0d50fd62-a78b-4172-bb6a-75db83130420', '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110', '2023-10-08 08:33:32'),
    ('3502016d-91d7-4fbc-8940-fdccb5df11e0', '6483fcb1-21f9-4ef3-9be1-9745e8421bd9', '2023-06-24 08:33:32'),
    ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', 'c468b044-e02e-45a7-890d-696bbf23104d', '2023-04-08 08:33:32'),
    ('1ac2ebb2-e29f-4055-952f-3e657f6b48fe', 'fc7a68ea-d8b9-4ded-b073-14bda61e6f6c', '2023-01-16 08:33:32'),
    ('f3ee160f-6d73-4178-aa54-e533f89c438a', '35fcb4ed-7d6c-4b86-9c62-2b9a509d1da6', '2023-06-28 08:33:32'),
    ('ad8904d5-fc76-4b93-ada7-8ff199dbcb0d', '484b7d60-ff6c-4230-ba17-dc80a7a25bad', '2022-12-03 08:33:32'),
    ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', '40bc12a8-99dd-4bf4-b2b9-ba6cb393b110', '2023-02-04 08:33:32');

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c833b96c-cf37-4a95-bc91-e09874534f1d', 'f2839d3b-3f05-4c79-8765-cf3133160b91', 8);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c833b96c-cf37-4a95-bc91-e09874534f1d', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c833b96c-cf37-4a95-bc91-e09874534f1d', '090851fb-fbb8-4892-b2d7-766f73a42655', 3);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c1e7dd85-6580-4577-a743-1ad644f95889', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 6);


INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f9a0aa19-07be-4438-99c0-6dc0efa4f10d', '090851fb-fbb8-4892-b2d7-766f73a42655', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f9a0aa19-07be-4438-99c0-6dc0efa4f10d', '8893c40d-ddfd-49ed-9637-870a26898b58', 2);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f9a0aa19-07be-4438-99c0-6dc0efa4f10d', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 10);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('d57736e0-33f9-4326-99e1-b67e76641496', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 6);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2d74b683-a368-40f1-a3ff-3980daed2f36', 'b82c394c-3a61-4364-9a3c-0d1095e4c65e', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2d74b683-a368-40f1-a3ff-3980daed2f36', '8893c40d-ddfd-49ed-9637-870a26898b58', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2d74b683-a368-40f1-a3ff-3980daed2f36', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 7);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2d74b683-a368-40f1-a3ff-3980daed2f36', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 8);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2d74b683-a368-40f1-a3ff-3980daed2f36', '9e609a89-d37b-452e-99c2-340834e918cd', 4);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('21a1b5b7-bba7-4804-b7e0-873b4bd55114', 'f2839d3b-3f05-4c79-8765-cf3133160b91', 4);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('21a1b5b7-bba7-4804-b7e0-873b4bd55114', '090851fb-fbb8-4892-b2d7-766f73a42655', 5);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '090851fb-fbb8-4892-b2d7-766f73a42655', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 4);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '8893c40d-ddfd-49ed-9637-870a26898b58', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 7);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('9bd97ae7-e190-4c18-878f-0a1f2e444c53', '9e609a89-d37b-452e-99c2-340834e918cd', 5);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('b24b38a7-28bb-4201-a736-74e0b574dd6f', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 4);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('b24b38a7-28bb-4201-a736-74e0b574dd6f', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 6);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('b24b38a7-28bb-4201-a736-74e0b574dd6f', '9e609a89-d37b-452e-99c2-340834e918cd', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('b24b38a7-28bb-4201-a736-74e0b574dd6f', '818e2043-b9fe-467c-aacc-b4c3ee9bcc7c', 4);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('b24b38a7-28bb-4201-a736-74e0b574dd6f', '8893c40d-ddfd-49ed-9637-870a26898b58', 6);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c2ab5656-3753-49d1-b792-d33ac2dd7c65', 'b82c394c-3a61-4364-9a3c-0d1095e4c65e', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c2ab5656-3753-49d1-b792-d33ac2dd7c65', '9e609a89-d37b-452e-99c2-340834e918cd', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c2ab5656-3753-49d1-b792-d33ac2dd7c65', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('c2ab5656-3753-49d1-b792-d33ac2dd7c65', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 8);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('d75d045c-362c-46bb-b579-ea61a46ab248', '090851fb-fbb8-4892-b2d7-766f73a42655', 7);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('d75d045c-362c-46bb-b579-ea61a46ab248', '8893c40d-ddfd-49ed-9637-870a26898b58', 8);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('262a4096-231c-41ac-9bd6-27afe9ae27d8', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 4);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('baf3596a-b9d8-4962-aacc-c5a456fd4057', '9e609a89-d37b-452e-99c2-340834e918cd', 10);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('baf3596a-b9d8-4962-aacc-c5a456fd4057', 'b82c394c-3a61-4364-9a3c-0d1095e4c65e', 10);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('baf3596a-b9d8-4962-aacc-c5a456fd4057', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 10);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('baf3596a-b9d8-4962-aacc-c5a456fd4057', '8893c40d-ddfd-49ed-9637-870a26898b58', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('baf3596a-b9d8-4962-aacc-c5a456fd4057', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 3);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('63df59c7-f913-4d5f-b281-629252ea716c', '9e609a89-d37b-452e-99c2-340834e918cd', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('63df59c7-f913-4d5f-b281-629252ea716c', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 5);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('0d50fd62-a78b-4172-bb6a-75db83130420', '090851fb-fbb8-4892-b2d7-766f73a42655', 10);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3502016d-91d7-4fbc-8940-fdccb5df11e0', '9e609a89-d37b-452e-99c2-340834e918cd', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3502016d-91d7-4fbc-8940-fdccb5df11e0', 'f2839d3b-3f05-4c79-8765-cf3133160b91', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3502016d-91d7-4fbc-8940-fdccb5df11e0', '17a15789-c683-4499-b01f-8da184845922', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3502016d-91d7-4fbc-8940-fdccb5df11e0', '090851fb-fbb8-4892-b2d7-766f73a42655', 2);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 8);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', '818e2043-b9fe-467c-aacc-b4c3ee9bcc7c', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 2);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('3e3d77b3-ec21-4867-8a1b-9dcdce118cb4', '17a15789-c683-4499-b01f-8da184845922', 3);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('1ac2ebb2-e29f-4055-952f-3e657f6b48fe', 'b82c394c-3a61-4364-9a3c-0d1095e4c65e', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('1ac2ebb2-e29f-4055-952f-3e657f6b48fe', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('1ac2ebb2-e29f-4055-952f-3e657f6b48fe', '9e609a89-d37b-452e-99c2-340834e918cd', 9);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f3ee160f-6d73-4178-aa54-e533f89c438a', '818e2043-b9fe-467c-aacc-b4c3ee9bcc7c', 5);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f3ee160f-6d73-4178-aa54-e533f89c438a', 'a95162b3-af86-4af2-8dac-96bed2c0cd12', 8);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f3ee160f-6d73-4178-aa54-e533f89c438a', '090851fb-fbb8-4892-b2d7-766f73a42655', 1);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('f3ee160f-6d73-4178-aa54-e533f89c438a', '17a15789-c683-4499-b01f-8da184845922', 6);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('ad8904d5-fc76-4b93-ada7-8ff199dbcb0d', '2f622b13-130f-41e3-a6a4-a2416dbb9b57', 8);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('ad8904d5-fc76-4b93-ada7-8ff199dbcb0d', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 3);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('ad8904d5-fc76-4b93-ada7-8ff199dbcb0d', '818e2043-b9fe-467c-aacc-b4c3ee9bcc7c', 2);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('ad8904d5-fc76-4b93-ada7-8ff199dbcb0d', '090851fb-fbb8-4892-b2d7-766f73a42655', 10);

INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', 'f2839d3b-3f05-4c79-8765-cf3133160b91', 2);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', '090851fb-fbb8-4892-b2d7-766f73a42655', 10);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', 'b82c394c-3a61-4364-9a3c-0d1095e4c65e', 9);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', '7c5f6daf-b16f-42d1-ba22-af0a48bc243a', 6);
INSERT INTO receipt_items (receipt_id, product_id, quantity) VALUES ('2659c6c6-f29d-4bcb-8697-b0e782e0feac', '8893c40d-ddfd-49ed-9637-870a26898b58', 7);
