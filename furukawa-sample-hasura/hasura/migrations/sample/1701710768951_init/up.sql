SET check_function_bodies = false;
CREATE TABLE public.products (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name jsonb,
    price numeric,
    weight numeric
);
CREATE TABLE public.receipt_items (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    receipt_id uuid,
    product_id uuid,
    quantity integer
);
CREATE TABLE public.receipts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid,
    purchase_date timestamp with time zone
);
CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    first_name jsonb,
    family_name jsonb,
    gender character(1),
    birthday timestamp with time zone
);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.receipt_items
    ADD CONSTRAINT receipt_items_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.receipts
    ADD CONSTRAINT receipts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.receipt_items
    ADD CONSTRAINT receipt_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
ALTER TABLE ONLY public.receipt_items
    ADD CONSTRAINT receipt_items_receipt_id_fkey FOREIGN KEY (receipt_id) REFERENCES public.receipts(id);
ALTER TABLE ONLY public.receipts
    ADD CONSTRAINT receipts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
