alter table "public"."products"
  add constraint "products_organization_id_fkey"
  foreign key ("organization_id")
  references "public"."organizations"
  ("id") on update restrict on delete restrict;
