export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "receipt_items" */
  delete_receipt_items?: Maybe<Receipt_Items_Mutation_Response>;
  /** delete single row from the table: "receipt_items" */
  delete_receipt_items_by_pk?: Maybe<Receipt_Items>;
  /** delete data from the table: "receipts" */
  delete_receipts?: Maybe<Receipts_Mutation_Response>;
  /** delete single row from the table: "receipts" */
  delete_receipts_by_pk?: Maybe<Receipts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "receipt_items" */
  insert_receipt_items?: Maybe<Receipt_Items_Mutation_Response>;
  /** insert a single row into the table: "receipt_items" */
  insert_receipt_items_one?: Maybe<Receipt_Items>;
  /** insert data into the table: "receipts" */
  insert_receipts?: Maybe<Receipts_Mutation_Response>;
  /** insert a single row into the table: "receipts" */
  insert_receipts_one?: Maybe<Receipts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "receipt_items" */
  update_receipt_items?: Maybe<Receipt_Items_Mutation_Response>;
  /** update single row of the table: "receipt_items" */
  update_receipt_items_by_pk?: Maybe<Receipt_Items>;
  /** update multiples rows of table: "receipt_items" */
  update_receipt_items_many?: Maybe<Array<Maybe<Receipt_Items_Mutation_Response>>>;
  /** update data of the table: "receipts" */
  update_receipts?: Maybe<Receipts_Mutation_Response>;
  /** update single row of the table: "receipts" */
  update_receipts_by_pk?: Maybe<Receipts>;
  /** update multiples rows of table: "receipts" */
  update_receipts_many?: Maybe<Array<Maybe<Receipts_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Receipt_ItemsArgs = {
  where: Receipt_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Receipt_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReceiptsArgs = {
  where: Receipts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Receipts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Receipt_ItemsArgs = {
  objects: Array<Receipt_Items_Insert_Input>;
  on_conflict?: InputMaybe<Receipt_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Receipt_Items_OneArgs = {
  object: Receipt_Items_Insert_Input;
  on_conflict?: InputMaybe<Receipt_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReceiptsArgs = {
  objects: Array<Receipts_Insert_Input>;
  on_conflict?: InputMaybe<Receipts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Receipts_OneArgs = {
  object: Receipts_Insert_Input;
  on_conflict?: InputMaybe<Receipts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Receipt_ItemsArgs = {
  _inc?: InputMaybe<Receipt_Items_Inc_Input>;
  _set?: InputMaybe<Receipt_Items_Set_Input>;
  where: Receipt_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Receipt_Items_By_PkArgs = {
  _inc?: InputMaybe<Receipt_Items_Inc_Input>;
  _set?: InputMaybe<Receipt_Items_Set_Input>;
  pk_columns: Receipt_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Receipt_Items_ManyArgs = {
  updates: Array<Receipt_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReceiptsArgs = {
  _set?: InputMaybe<Receipts_Set_Input>;
  where: Receipts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Receipts_By_PkArgs = {
  _set?: InputMaybe<Receipts_Set_Input>;
  pk_columns: Receipts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Receipts_ManyArgs = {
  updates: Array<Receipts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['jsonb']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  receipt_items: Array<Receipt_Items>;
  /** An aggregate relationship */
  receipt_items_aggregate: Receipt_Items_Aggregate;
  weight?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "products" */
export type ProductsNameArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "products" */
export type ProductsReceipt_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsReceipt_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Products_Append_Input = {
  name?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<Jsonb_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_items?: InputMaybe<Receipt_Items_Bool_Exp>;
  receipt_items_aggregate?: InputMaybe<Receipt_Items_Aggregate_Bool_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Products_Delete_At_Path_Input = {
  name?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Products_Delete_Elem_Input = {
  name?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Products_Delete_Key_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['jsonb']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_items?: InputMaybe<Receipt_Items_Arr_Rel_Insert_Input>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_items_aggregate?: InputMaybe<Receipt_Items_Aggregate_Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Products_Prepend_Input = {
  name?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['jsonb']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['jsonb']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Weight = 'weight'
}

export type Products_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Products_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Products_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  receipt_items: Array<Receipt_Items>;
  /** An aggregate relationship */
  receipt_items_aggregate: Receipt_Items_Aggregate;
  /** fetch data from the table: "receipt_items" using primary key columns */
  receipt_items_by_pk?: Maybe<Receipt_Items>;
  /** An array relationship */
  receipts: Array<Receipts>;
  /** An aggregate relationship */
  receipts_aggregate: Receipts_Aggregate;
  /** fetch data from the table: "receipts" using primary key columns */
  receipts_by_pk?: Maybe<Receipts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReceipt_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


export type Query_RootReceipt_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


export type Query_RootReceipt_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


export type Query_RootReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


export type Query_RootReceipts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "receipt_items" */
export type Receipt_Items = {
  __typename?: 'receipt_items';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  product?: Maybe<Products>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  receipt?: Maybe<Receipts>;
  receipt_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "receipt_items" */
export type Receipt_Items_Aggregate = {
  __typename?: 'receipt_items_aggregate';
  aggregate?: Maybe<Receipt_Items_Aggregate_Fields>;
  nodes: Array<Receipt_Items>;
};

export type Receipt_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Receipt_Items_Aggregate_Bool_Exp_Count>;
};

export type Receipt_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Receipt_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "receipt_items" */
export type Receipt_Items_Aggregate_Fields = {
  __typename?: 'receipt_items_aggregate_fields';
  avg?: Maybe<Receipt_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Receipt_Items_Max_Fields>;
  min?: Maybe<Receipt_Items_Min_Fields>;
  stddev?: Maybe<Receipt_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Receipt_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Receipt_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Receipt_Items_Sum_Fields>;
  var_pop?: Maybe<Receipt_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Receipt_Items_Var_Samp_Fields>;
  variance?: Maybe<Receipt_Items_Variance_Fields>;
};


/** aggregate fields of "receipt_items" */
export type Receipt_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "receipt_items" */
export type Receipt_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Receipt_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Receipt_Items_Max_Order_By>;
  min?: InputMaybe<Receipt_Items_Min_Order_By>;
  stddev?: InputMaybe<Receipt_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Receipt_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Receipt_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Receipt_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Receipt_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Receipt_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Receipt_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "receipt_items" */
export type Receipt_Items_Arr_Rel_Insert_Input = {
  data: Array<Receipt_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Receipt_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Receipt_Items_Avg_Fields = {
  __typename?: 'receipt_items_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "receipt_items" */
export type Receipt_Items_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "receipt_items". All fields are combined with a logical 'AND'. */
export type Receipt_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Receipt_Items_Bool_Exp>>;
  _not?: InputMaybe<Receipt_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Receipt_Items_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  receipt?: InputMaybe<Receipts_Bool_Exp>;
  receipt_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "receipt_items" */
export enum Receipt_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReceiptItemsPkey = 'receipt_items_pkey'
}

/** input type for incrementing numeric columns in table "receipt_items" */
export type Receipt_Items_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "receipt_items" */
export type Receipt_Items_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  receipt?: InputMaybe<Receipts_Obj_Rel_Insert_Input>;
  receipt_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Receipt_Items_Max_Fields = {
  __typename?: 'receipt_items_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  receipt_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "receipt_items" */
export type Receipt_Items_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Receipt_Items_Min_Fields = {
  __typename?: 'receipt_items_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  receipt_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "receipt_items" */
export type Receipt_Items_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "receipt_items" */
export type Receipt_Items_Mutation_Response = {
  __typename?: 'receipt_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Receipt_Items>;
};

/** on_conflict condition type for table "receipt_items" */
export type Receipt_Items_On_Conflict = {
  constraint: Receipt_Items_Constraint;
  update_columns?: Array<Receipt_Items_Update_Column>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "receipt_items". */
export type Receipt_Items_Order_By = {
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  receipt?: InputMaybe<Receipts_Order_By>;
  receipt_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: receipt_items */
export type Receipt_Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "receipt_items" */
export enum Receipt_Items_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ReceiptId = 'receipt_id'
}

/** input type for updating data in table "receipt_items" */
export type Receipt_Items_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  receipt_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Receipt_Items_Stddev_Fields = {
  __typename?: 'receipt_items_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "receipt_items" */
export type Receipt_Items_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Receipt_Items_Stddev_Pop_Fields = {
  __typename?: 'receipt_items_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "receipt_items" */
export type Receipt_Items_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Receipt_Items_Stddev_Samp_Fields = {
  __typename?: 'receipt_items_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "receipt_items" */
export type Receipt_Items_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "receipt_items" */
export type Receipt_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Receipt_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Receipt_Items_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  receipt_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Receipt_Items_Sum_Fields = {
  __typename?: 'receipt_items_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "receipt_items" */
export type Receipt_Items_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "receipt_items" */
export enum Receipt_Items_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ReceiptId = 'receipt_id'
}

export type Receipt_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Receipt_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Receipt_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Receipt_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Receipt_Items_Var_Pop_Fields = {
  __typename?: 'receipt_items_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "receipt_items" */
export type Receipt_Items_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Receipt_Items_Var_Samp_Fields = {
  __typename?: 'receipt_items_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "receipt_items" */
export type Receipt_Items_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Receipt_Items_Variance_Fields = {
  __typename?: 'receipt_items_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "receipt_items" */
export type Receipt_Items_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "receipts" */
export type Receipts = {
  __typename?: 'receipts';
  id: Scalars['uuid']['output'];
  purchase_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  receipt_items: Array<Receipt_Items>;
  /** An aggregate relationship */
  receipt_items_aggregate: Receipt_Items_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "receipts" */
export type ReceiptsReceipt_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


/** columns and relationships of "receipts" */
export type ReceiptsReceipt_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};

/** aggregated selection of "receipts" */
export type Receipts_Aggregate = {
  __typename?: 'receipts_aggregate';
  aggregate?: Maybe<Receipts_Aggregate_Fields>;
  nodes: Array<Receipts>;
};

export type Receipts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Receipts_Aggregate_Bool_Exp_Count>;
};

export type Receipts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Receipts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Receipts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "receipts" */
export type Receipts_Aggregate_Fields = {
  __typename?: 'receipts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Receipts_Max_Fields>;
  min?: Maybe<Receipts_Min_Fields>;
};


/** aggregate fields of "receipts" */
export type Receipts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Receipts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "receipts" */
export type Receipts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Receipts_Max_Order_By>;
  min?: InputMaybe<Receipts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "receipts" */
export type Receipts_Arr_Rel_Insert_Input = {
  data: Array<Receipts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Receipts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "receipts". All fields are combined with a logical 'AND'. */
export type Receipts_Bool_Exp = {
  _and?: InputMaybe<Array<Receipts_Bool_Exp>>;
  _not?: InputMaybe<Receipts_Bool_Exp>;
  _or?: InputMaybe<Array<Receipts_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  purchase_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  receipt_items?: InputMaybe<Receipt_Items_Bool_Exp>;
  receipt_items_aggregate?: InputMaybe<Receipt_Items_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "receipts" */
export enum Receipts_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReceiptsPkey = 'receipts_pkey'
}

/** input type for inserting data into table "receipts" */
export type Receipts_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchase_date?: InputMaybe<Scalars['timestamptz']['input']>;
  receipt_items?: InputMaybe<Receipt_Items_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Receipts_Max_Fields = {
  __typename?: 'receipts_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  purchase_date?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "receipts" */
export type Receipts_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Receipts_Min_Fields = {
  __typename?: 'receipts_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  purchase_date?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "receipts" */
export type Receipts_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "receipts" */
export type Receipts_Mutation_Response = {
  __typename?: 'receipts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Receipts>;
};

/** input type for inserting object relation for remote table "receipts" */
export type Receipts_Obj_Rel_Insert_Input = {
  data: Receipts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Receipts_On_Conflict>;
};

/** on_conflict condition type for table "receipts" */
export type Receipts_On_Conflict = {
  constraint: Receipts_Constraint;
  update_columns?: Array<Receipts_Update_Column>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};

/** Ordering options when selecting data from "receipts". */
export type Receipts_Order_By = {
  id?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  receipt_items_aggregate?: InputMaybe<Receipt_Items_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: receipts */
export type Receipts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "receipts" */
export enum Receipts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "receipts" */
export type Receipts_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchase_date?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "receipts" */
export type Receipts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Receipts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Receipts_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  purchase_date?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "receipts" */
export enum Receipts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  UserId = 'user_id'
}

export type Receipts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Receipts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Receipts_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** An array relationship */
  receipt_items: Array<Receipt_Items>;
  /** An aggregate relationship */
  receipt_items_aggregate: Receipt_Items_Aggregate;
  /** fetch data from the table: "receipt_items" using primary key columns */
  receipt_items_by_pk?: Maybe<Receipt_Items>;
  /** fetch data from the table in a streaming manner: "receipt_items" */
  receipt_items_stream: Array<Receipt_Items>;
  /** An array relationship */
  receipts: Array<Receipts>;
  /** An aggregate relationship */
  receipts_aggregate: Receipts_Aggregate;
  /** fetch data from the table: "receipts" using primary key columns */
  receipts_by_pk?: Maybe<Receipts>;
  /** fetch data from the table in a streaming manner: "receipts" */
  receipts_stream: Array<Receipts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootReceipt_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


export type Subscription_RootReceipt_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Items_Order_By>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


export type Subscription_RootReceipt_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReceipt_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Receipt_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Receipt_Items_Bool_Exp>;
};


export type Subscription_RootReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


export type Subscription_RootReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


export type Subscription_RootReceipts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReceipts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Receipts_Stream_Cursor_Input>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  family_name?: Maybe<Scalars['jsonb']['output']>;
  first_name?: Maybe<Scalars['jsonb']['output']>;
  gender?: Maybe<Scalars['bpchar']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  receipts: Array<Receipts>;
  /** An aggregate relationship */
  receipts_aggregate: Receipts_Aggregate;
};


/** columns and relationships of "users" */
export type UsersFamily_NameArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersFirst_NameArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipts_Order_By>>;
  where?: InputMaybe<Receipts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  family_name?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  birthday?: InputMaybe<Timestamptz_Comparison_Exp>;
  family_name?: InputMaybe<Jsonb_Comparison_Exp>;
  first_name?: InputMaybe<Jsonb_Comparison_Exp>;
  gender?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  receipts?: InputMaybe<Receipts_Bool_Exp>;
  receipts_aggregate?: InputMaybe<Receipts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  family_name?: InputMaybe<Array<Scalars['String']['input']>>;
  first_name?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  family_name?: InputMaybe<Scalars['Int']['input']>;
  first_name?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  family_name?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  family_name?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['jsonb']['input']>;
  gender?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  receipts?: InputMaybe<Receipts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  birthday?: Maybe<Scalars['timestamptz']['output']>;
  gender?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  birthday?: InputMaybe<Order_By>;
  family_name?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receipts_aggregate?: InputMaybe<Receipts_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  family_name?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  family_name?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['jsonb']['input']>;
  gender?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  birthday?: InputMaybe<Scalars['timestamptz']['input']>;
  family_name?: InputMaybe<Scalars['jsonb']['input']>;
  first_name?: InputMaybe<Scalars['jsonb']['input']>;
  gender?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
