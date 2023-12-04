-- テーブル作成

-- 必要な場合は、uuid-ossp モジュールを有効化
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- users テーブル
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name JSONB,
    family_name JSONB,
    gender CHAR(1),
    birthday timestamptz
);

-- receipts テーブル
CREATE TABLE receipts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    purchase_date timestamptz
);

-- products テーブル
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name JSONB,
    price DECIMAL,
    weight DECIMAL
);

-- receipt_items テーブル
CREATE TABLE receipt_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    receipt_id UUID REFERENCES receipts(id),
    product_id UUID REFERENCES products(id),
    quantity INT
);