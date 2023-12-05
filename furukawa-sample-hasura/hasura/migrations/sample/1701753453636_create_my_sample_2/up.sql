-- public.my_sample_1 definition

-- Drop table

-- DROP TABLE public.my_sample_1;

CREATE TABLE public.my_sample_2 (
	"ID" uuid NOT NULL DEFAULT gen_random_uuid(),
	val text NOT NULL,
	CONSTRAINT my_sample_2_pkey PRIMARY KEY ("ID")
);