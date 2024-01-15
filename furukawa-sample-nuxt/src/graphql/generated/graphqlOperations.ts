import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bpchar: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  name: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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
  /** delete data from the table: "my_sample_1" */
  delete_my_sample_1?: Maybe<My_Sample_1_Mutation_Response>;
  /** delete single row from the table: "my_sample_1" */
  delete_my_sample_1_by_pk?: Maybe<My_Sample_1>;
  /** delete data from the table: "my_sample_2" */
  delete_my_sample_2?: Maybe<My_Sample_2_Mutation_Response>;
  /** delete single row from the table: "my_sample_2" */
  delete_my_sample_2_by_pk?: Maybe<My_Sample_2>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
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
  /** insert data into the table: "my_sample_1" */
  insert_my_sample_1?: Maybe<My_Sample_1_Mutation_Response>;
  /** insert a single row into the table: "my_sample_1" */
  insert_my_sample_1_one?: Maybe<My_Sample_1>;
  /** insert data into the table: "my_sample_2" */
  insert_my_sample_2?: Maybe<My_Sample_2_Mutation_Response>;
  /** insert a single row into the table: "my_sample_2" */
  insert_my_sample_2_one?: Maybe<My_Sample_2>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
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
  /** update data of the table: "my_sample_1" */
  update_my_sample_1?: Maybe<My_Sample_1_Mutation_Response>;
  /** update single row of the table: "my_sample_1" */
  update_my_sample_1_by_pk?: Maybe<My_Sample_1>;
  /** update multiples rows of table: "my_sample_1" */
  update_my_sample_1_many?: Maybe<Array<Maybe<My_Sample_1_Mutation_Response>>>;
  /** update data of the table: "my_sample_2" */
  update_my_sample_2?: Maybe<My_Sample_2_Mutation_Response>;
  /** update single row of the table: "my_sample_2" */
  update_my_sample_2_by_pk?: Maybe<My_Sample_2>;
  /** update multiples rows of table: "my_sample_2" */
  update_my_sample_2_many?: Maybe<Array<Maybe<My_Sample_2_Mutation_Response>>>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
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
export type Mutation_RootDelete_My_Sample_1Args = {
  where: My_Sample_1_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_My_Sample_1_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_My_Sample_2Args = {
  where: My_Sample_2_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_My_Sample_2_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['Int']['input'];
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
export type Mutation_RootInsert_My_Sample_1Args = {
  objects: Array<My_Sample_1_Insert_Input>;
  on_conflict?: InputMaybe<My_Sample_1_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_Sample_1_OneArgs = {
  object: My_Sample_1_Insert_Input;
  on_conflict?: InputMaybe<My_Sample_1_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_Sample_2Args = {
  objects: Array<My_Sample_2_Insert_Input>;
  on_conflict?: InputMaybe<My_Sample_2_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_My_Sample_2_OneArgs = {
  object: My_Sample_2_Insert_Input;
  on_conflict?: InputMaybe<My_Sample_2_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
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
export type Mutation_RootUpdate_My_Sample_1Args = {
  _inc?: InputMaybe<My_Sample_1_Inc_Input>;
  _set?: InputMaybe<My_Sample_1_Set_Input>;
  where: My_Sample_1_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_My_Sample_1_By_PkArgs = {
  _inc?: InputMaybe<My_Sample_1_Inc_Input>;
  _set?: InputMaybe<My_Sample_1_Set_Input>;
  pk_columns: My_Sample_1_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_My_Sample_1_ManyArgs = {
  updates: Array<My_Sample_1_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_My_Sample_2Args = {
  _set?: InputMaybe<My_Sample_2_Set_Input>;
  where: My_Sample_2_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_My_Sample_2_By_PkArgs = {
  _set?: InputMaybe<My_Sample_2_Set_Input>;
  pk_columns: My_Sample_2_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_My_Sample_2_ManyArgs = {
  updates: Array<My_Sample_2_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
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

/** columns and relationships of "my_sample_1" */
export type My_Sample_1 = {
  __typename?: 'my_sample_1';
  ID: Scalars['uuid']['output'];
  hogehoge?: Maybe<Scalars['Int']['output']>;
  jojo?: Maybe<Scalars['Boolean']['output']>;
  val: Scalars['String']['output'];
};

/** aggregated selection of "my_sample_1" */
export type My_Sample_1_Aggregate = {
  __typename?: 'my_sample_1_aggregate';
  aggregate?: Maybe<My_Sample_1_Aggregate_Fields>;
  nodes: Array<My_Sample_1>;
};

/** aggregate fields of "my_sample_1" */
export type My_Sample_1_Aggregate_Fields = {
  __typename?: 'my_sample_1_aggregate_fields';
  avg?: Maybe<My_Sample_1_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<My_Sample_1_Max_Fields>;
  min?: Maybe<My_Sample_1_Min_Fields>;
  stddev?: Maybe<My_Sample_1_Stddev_Fields>;
  stddev_pop?: Maybe<My_Sample_1_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<My_Sample_1_Stddev_Samp_Fields>;
  sum?: Maybe<My_Sample_1_Sum_Fields>;
  var_pop?: Maybe<My_Sample_1_Var_Pop_Fields>;
  var_samp?: Maybe<My_Sample_1_Var_Samp_Fields>;
  variance?: Maybe<My_Sample_1_Variance_Fields>;
};


/** aggregate fields of "my_sample_1" */
export type My_Sample_1_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<My_Sample_1_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type My_Sample_1_Avg_Fields = {
  __typename?: 'my_sample_1_avg_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "my_sample_1". All fields are combined with a logical 'AND'. */
export type My_Sample_1_Bool_Exp = {
  ID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<My_Sample_1_Bool_Exp>>;
  _not?: InputMaybe<My_Sample_1_Bool_Exp>;
  _or?: InputMaybe<Array<My_Sample_1_Bool_Exp>>;
  hogehoge?: InputMaybe<Int_Comparison_Exp>;
  jojo?: InputMaybe<Boolean_Comparison_Exp>;
  val?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "my_sample_1" */
export enum My_Sample_1_Constraint {
  /** unique or primary key constraint on columns "ID" */
  MySample_1Pkey = 'my_sample_1_pkey'
}

/** input type for incrementing numeric columns in table "my_sample_1" */
export type My_Sample_1_Inc_Input = {
  hogehoge?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "my_sample_1" */
export type My_Sample_1_Insert_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  hogehoge?: InputMaybe<Scalars['Int']['input']>;
  jojo?: InputMaybe<Scalars['Boolean']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type My_Sample_1_Max_Fields = {
  __typename?: 'my_sample_1_max_fields';
  ID?: Maybe<Scalars['uuid']['output']>;
  hogehoge?: Maybe<Scalars['Int']['output']>;
  val?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type My_Sample_1_Min_Fields = {
  __typename?: 'my_sample_1_min_fields';
  ID?: Maybe<Scalars['uuid']['output']>;
  hogehoge?: Maybe<Scalars['Int']['output']>;
  val?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "my_sample_1" */
export type My_Sample_1_Mutation_Response = {
  __typename?: 'my_sample_1_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<My_Sample_1>;
};

/** on_conflict condition type for table "my_sample_1" */
export type My_Sample_1_On_Conflict = {
  constraint: My_Sample_1_Constraint;
  update_columns?: Array<My_Sample_1_Update_Column>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};

/** Ordering options when selecting data from "my_sample_1". */
export type My_Sample_1_Order_By = {
  ID?: InputMaybe<Order_By>;
  hogehoge?: InputMaybe<Order_By>;
  jojo?: InputMaybe<Order_By>;
  val?: InputMaybe<Order_By>;
};

/** primary key columns input for table: my_sample_1 */
export type My_Sample_1_Pk_Columns_Input = {
  ID: Scalars['uuid']['input'];
};

/** select columns of table "my_sample_1" */
export enum My_Sample_1_Select_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Hogehoge = 'hogehoge',
  /** column name */
  Jojo = 'jojo',
  /** column name */
  Val = 'val'
}

/** input type for updating data in table "my_sample_1" */
export type My_Sample_1_Set_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  hogehoge?: InputMaybe<Scalars['Int']['input']>;
  jojo?: InputMaybe<Scalars['Boolean']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type My_Sample_1_Stddev_Fields = {
  __typename?: 'my_sample_1_stddev_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type My_Sample_1_Stddev_Pop_Fields = {
  __typename?: 'my_sample_1_stddev_pop_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type My_Sample_1_Stddev_Samp_Fields = {
  __typename?: 'my_sample_1_stddev_samp_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "my_sample_1" */
export type My_Sample_1_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: My_Sample_1_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type My_Sample_1_Stream_Cursor_Value_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  hogehoge?: InputMaybe<Scalars['Int']['input']>;
  jojo?: InputMaybe<Scalars['Boolean']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type My_Sample_1_Sum_Fields = {
  __typename?: 'my_sample_1_sum_fields';
  hogehoge?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "my_sample_1" */
export enum My_Sample_1_Update_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Hogehoge = 'hogehoge',
  /** column name */
  Jojo = 'jojo',
  /** column name */
  Val = 'val'
}

export type My_Sample_1_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<My_Sample_1_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<My_Sample_1_Set_Input>;
  /** filter the rows which have to be updated */
  where: My_Sample_1_Bool_Exp;
};

/** aggregate var_pop on columns */
export type My_Sample_1_Var_Pop_Fields = {
  __typename?: 'my_sample_1_var_pop_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type My_Sample_1_Var_Samp_Fields = {
  __typename?: 'my_sample_1_var_samp_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type My_Sample_1_Variance_Fields = {
  __typename?: 'my_sample_1_variance_fields';
  hogehoge?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "my_sample_2" */
export type My_Sample_2 = {
  __typename?: 'my_sample_2';
  ID: Scalars['uuid']['output'];
  val: Scalars['String']['output'];
};

/** aggregated selection of "my_sample_2" */
export type My_Sample_2_Aggregate = {
  __typename?: 'my_sample_2_aggregate';
  aggregate?: Maybe<My_Sample_2_Aggregate_Fields>;
  nodes: Array<My_Sample_2>;
};

/** aggregate fields of "my_sample_2" */
export type My_Sample_2_Aggregate_Fields = {
  __typename?: 'my_sample_2_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<My_Sample_2_Max_Fields>;
  min?: Maybe<My_Sample_2_Min_Fields>;
};


/** aggregate fields of "my_sample_2" */
export type My_Sample_2_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<My_Sample_2_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "my_sample_2". All fields are combined with a logical 'AND'. */
export type My_Sample_2_Bool_Exp = {
  ID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<My_Sample_2_Bool_Exp>>;
  _not?: InputMaybe<My_Sample_2_Bool_Exp>;
  _or?: InputMaybe<Array<My_Sample_2_Bool_Exp>>;
  val?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "my_sample_2" */
export enum My_Sample_2_Constraint {
  /** unique or primary key constraint on columns "ID" */
  MySample_2Pkey = 'my_sample_2_pkey'
}

/** input type for inserting data into table "my_sample_2" */
export type My_Sample_2_Insert_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type My_Sample_2_Max_Fields = {
  __typename?: 'my_sample_2_max_fields';
  ID?: Maybe<Scalars['uuid']['output']>;
  val?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type My_Sample_2_Min_Fields = {
  __typename?: 'my_sample_2_min_fields';
  ID?: Maybe<Scalars['uuid']['output']>;
  val?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "my_sample_2" */
export type My_Sample_2_Mutation_Response = {
  __typename?: 'my_sample_2_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<My_Sample_2>;
};

/** on_conflict condition type for table "my_sample_2" */
export type My_Sample_2_On_Conflict = {
  constraint: My_Sample_2_Constraint;
  update_columns?: Array<My_Sample_2_Update_Column>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};

/** Ordering options when selecting data from "my_sample_2". */
export type My_Sample_2_Order_By = {
  ID?: InputMaybe<Order_By>;
  val?: InputMaybe<Order_By>;
};

/** primary key columns input for table: my_sample_2 */
export type My_Sample_2_Pk_Columns_Input = {
  ID: Scalars['uuid']['input'];
};

/** select columns of table "my_sample_2" */
export enum My_Sample_2_Select_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Val = 'val'
}

/** input type for updating data in table "my_sample_2" */
export type My_Sample_2_Set_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "my_sample_2" */
export type My_Sample_2_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: My_Sample_2_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type My_Sample_2_Stream_Cursor_Value_Input = {
  ID?: InputMaybe<Scalars['uuid']['input']>;
  val?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "my_sample_2" */
export enum My_Sample_2_Update_Column {
  /** column name */
  Id = 'ID',
  /** column name */
  Val = 'val'
}

export type My_Sample_2_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<My_Sample_2_Set_Input>;
  /** filter the rows which have to be updated */
  where: My_Sample_2_Bool_Exp;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
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

/** ログインユーザーが所属する組織 */
export type Organizations = {
  __typename?: 'organizations';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  organization_name: Scalars['name']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<Organizations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organization_name?: InputMaybe<Name_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'organization_pkey'
}

/** input type for incrementing numeric columns in table "organizations" */
export type Organizations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organization_name?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organization_name?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  organization_name?: InputMaybe<Scalars['name']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationName = 'organization_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Organizations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organizations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['jsonb']['output']>;
  organization_id: Scalars['Int']['output'];
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
  organization_id?: Maybe<Scalars['Float']['output']>;
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
  organization_id?: InputMaybe<Int_Comparison_Exp>;
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
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['jsonb']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_items?: InputMaybe<Receipt_Items_Arr_Rel_Insert_Input>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
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
  organization_id?: InputMaybe<Order_By>;
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
  OrganizationId = 'organization_id',
  /** column name */
  Price = 'price',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['jsonb']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  organization_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  organization_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  organization_id?: Maybe<Scalars['Float']['output']>;
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
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  organization_id?: Maybe<Scalars['Int']['output']>;
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
  OrganizationId = 'organization_id',
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
  organization_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  organization_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  organization_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "my_sample_1" */
  my_sample_1: Array<My_Sample_1>;
  /** fetch aggregated fields from the table: "my_sample_1" */
  my_sample_1_aggregate: My_Sample_1_Aggregate;
  /** fetch data from the table: "my_sample_1" using primary key columns */
  my_sample_1_by_pk?: Maybe<My_Sample_1>;
  /** fetch data from the table: "my_sample_2" */
  my_sample_2: Array<My_Sample_2>;
  /** fetch aggregated fields from the table: "my_sample_2" */
  my_sample_2_aggregate: My_Sample_2_Aggregate;
  /** fetch data from the table: "my_sample_2" using primary key columns */
  my_sample_2_by_pk?: Maybe<My_Sample_2>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
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


export type Query_RootMy_Sample_1Args = {
  distinct_on?: InputMaybe<Array<My_Sample_1_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_1_Order_By>>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};


export type Query_RootMy_Sample_1_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Sample_1_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_1_Order_By>>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};


export type Query_RootMy_Sample_1_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


export type Query_RootMy_Sample_2Args = {
  distinct_on?: InputMaybe<Array<My_Sample_2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_2_Order_By>>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};


export type Query_RootMy_Sample_2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Sample_2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_2_Order_By>>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};


export type Query_RootMy_Sample_2_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['Int']['input'];
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
  /** fetch data from the table: "my_sample_1" */
  my_sample_1: Array<My_Sample_1>;
  /** fetch aggregated fields from the table: "my_sample_1" */
  my_sample_1_aggregate: My_Sample_1_Aggregate;
  /** fetch data from the table: "my_sample_1" using primary key columns */
  my_sample_1_by_pk?: Maybe<My_Sample_1>;
  /** fetch data from the table in a streaming manner: "my_sample_1" */
  my_sample_1_stream: Array<My_Sample_1>;
  /** fetch data from the table: "my_sample_2" */
  my_sample_2: Array<My_Sample_2>;
  /** fetch aggregated fields from the table: "my_sample_2" */
  my_sample_2_aggregate: My_Sample_2_Aggregate;
  /** fetch data from the table: "my_sample_2" using primary key columns */
  my_sample_2_by_pk?: Maybe<My_Sample_2>;
  /** fetch data from the table in a streaming manner: "my_sample_2" */
  my_sample_2_stream: Array<My_Sample_2>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizations_stream: Array<Organizations>;
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


export type Subscription_RootMy_Sample_1Args = {
  distinct_on?: InputMaybe<Array<My_Sample_1_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_1_Order_By>>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};


export type Subscription_RootMy_Sample_1_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Sample_1_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_1_Order_By>>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};


export type Subscription_RootMy_Sample_1_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


export type Subscription_RootMy_Sample_1_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<My_Sample_1_Stream_Cursor_Input>>;
  where?: InputMaybe<My_Sample_1_Bool_Exp>;
};


export type Subscription_RootMy_Sample_2Args = {
  distinct_on?: InputMaybe<Array<My_Sample_2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_2_Order_By>>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};


export type Subscription_RootMy_Sample_2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<My_Sample_2_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<My_Sample_2_Order_By>>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};


export type Subscription_RootMy_Sample_2_By_PkArgs = {
  ID: Scalars['uuid']['input'];
};


export type Subscription_RootMy_Sample_2_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<My_Sample_2_Stream_Cursor_Input>>;
  where?: InputMaybe<My_Sample_2_Bool_Exp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
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

export type UpdateProductsMutationVariables = Exact<{
  where: Products_Bool_Exp;
  set?: InputMaybe<Products_Set_Input>;
}>;


export type UpdateProductsMutation = { __typename?: 'mutation_root', update_products?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', id: any, name?: any | null, price?: any | null }> } | null };

export type UpdateUsersMutationVariables = Exact<{
  where: Users_Bool_Exp;
  set?: InputMaybe<Users_Set_Input>;
}>;


export type UpdateUsersMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: any, gender?: any | null, birthday?: any | null, first_name?: any | null, family_name?: any | null }> } | null };

export type SearchProductsQueryVariables = Exact<{
  where?: InputMaybe<Products_Bool_Exp>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name?: any | null, price?: any | null, organization_id: number }> };

export type SearchUsersQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
  order_by?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  isAuthorized: Scalars['Boolean']['input'];
}>;


export type SearchUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, first_name?: any | null, family_name?: any | null, gender?: any | null, birthday?: any | null }> };

export type SearchUsersByRolesAttributesFragment = { __typename?: 'users', gender?: any | null, birthday?: any | null };

export type ObserveProductsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ObserveProductsSubscription = { __typename?: 'subscription_root', products: Array<{ __typename?: 'products', id: any, name?: any | null, price?: any | null }> };

export const SearchUsersByRolesAttributesFragmentDoc = gql`
    fragment searchUsersByRolesAttributes on users {
  gender
  birthday
}
    `;
export const UpdateProductsDocument = gql`
    mutation UpdateProducts($where: products_bool_exp!, $set: products_set_input) {
  update_products(where: $where, _set: $set) {
    returning {
      id
      name
      price
    }
  }
}
    `;

/**
 * __useUpdateProductsMutation__
 *
 * To run a mutation, you first call `useUpdateProductsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateProductsMutation({
 *   variables: {
 *     where: // value for 'where'
 *     set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProductsMutation(options: VueApolloComposable.UseMutationOptions<UpdateProductsMutation, UpdateProductsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateProductsMutation, UpdateProductsMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateProductsMutation, UpdateProductsMutationVariables>(UpdateProductsDocument, options);
}
export type UpdateProductsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateProductsMutation, UpdateProductsMutationVariables>;
export const UpdateUsersDocument = gql`
    mutation UpdateUsers($where: users_bool_exp!, $set: users_set_input) {
  update_users(where: $where, _set: $set) {
    returning {
      id
      gender
      birthday
      first_name
      family_name
    }
  }
}
    `;

/**
 * __useUpdateUsersMutation__
 *
 * To run a mutation, you first call `useUpdateUsersMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUsersMutation({
 *   variables: {
 *     where: // value for 'where'
 *     set: // value for 'set'
 *   },
 * });
 */
export function useUpdateUsersMutation(options: VueApolloComposable.UseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateUsersMutation, UpdateUsersMutationVariables>(UpdateUsersDocument, options);
}
export type UpdateUsersMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUsersMutation, UpdateUsersMutationVariables>;
export const SearchProductsDocument = gql`
    query SearchProducts($where: products_bool_exp, $order_by: [products_order_by!], $limit: Int, $offset: Int) {
  products(where: $where, order_by: $order_by, limit: $limit, offset: $offset) {
    id
    name
    price
    organization_id
  }
}
    `;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a Vue component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchProductsQuery({
 *   where: // value for 'where'
 *   order_by: // value for 'order_by'
 *   limit: // value for 'limit'
 *   offset: // value for 'offset'
 * });
 */
export function useSearchProductsQuery(variables: SearchProductsQueryVariables | VueCompositionApi.Ref<SearchProductsQueryVariables> | ReactiveFunction<SearchProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, variables, options);
}
export function useSearchProductsLazyQuery(variables: SearchProductsQueryVariables | VueCompositionApi.Ref<SearchProductsQueryVariables> | ReactiveFunction<SearchProductsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchProductsQuery, SearchProductsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, variables, options);
}
export type SearchProductsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchProductsQuery, SearchProductsQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($where: users_bool_exp, $order_by: [users_order_by!], $limit: Int, $offset: Int, $isAuthorized: Boolean!) {
  users(where: $where, order_by: $order_by, limit: $limit, offset: $offset) {
    id
    first_name
    family_name
    ...searchUsersByRolesAttributes @include(if: $isAuthorized)
  }
}
    ${SearchUsersByRolesAttributesFragmentDoc}`;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a Vue component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchUsersQuery({
 *   where: // value for 'where'
 *   order_by: // value for 'order_by'
 *   limit: // value for 'limit'
 *   offset: // value for 'offset'
 *   isAuthorized: // value for 'isAuthorized'
 * });
 */
export function useSearchUsersQuery(variables: SearchUsersQueryVariables | VueCompositionApi.Ref<SearchUsersQueryVariables> | ReactiveFunction<SearchUsersQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, variables, options);
}
export function useSearchUsersLazyQuery(variables: SearchUsersQueryVariables | VueCompositionApi.Ref<SearchUsersQueryVariables> | ReactiveFunction<SearchUsersQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchUsersQuery, SearchUsersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, variables, options);
}
export type SearchUsersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchUsersQuery, SearchUsersQueryVariables>;
export const ObserveProductsDocument = gql`
    subscription observeProducts {
  products(limit: 10, offset: 0) {
    id
    name
    price
  }
}
    `;

/**
 * __useObserveProductsSubscription__
 *
 * To run a query within a Vue component, call `useObserveProductsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useObserveProductsSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useObserveProductsSubscription();
 */
export function useObserveProductsSubscription(options: VueApolloComposable.UseSubscriptionOptions<ObserveProductsSubscription, ObserveProductsSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<ObserveProductsSubscription, ObserveProductsSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<ObserveProductsSubscription, ObserveProductsSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<ObserveProductsSubscription, ObserveProductsSubscriptionVariables>(ObserveProductsDocument, {}, options);
}
export type ObserveProductsSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<ObserveProductsSubscription, ObserveProductsSubscriptionVariables>;