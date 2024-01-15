CREATE TABLE "public"."organization" ("id" serial NOT NULL, "organization_name" name NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public"."organization" IS E'ログインユーザーが所属する組織';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_organization_updated_at"
BEFORE UPDATE ON "public"."organization"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_organization_updated_at" ON "public"."organization"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
