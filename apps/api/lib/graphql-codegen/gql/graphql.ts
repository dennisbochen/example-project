/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: 'Person';
  /** The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope. */
  birthYear?: Maybe<Scalars['String']>;
  /** the ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** the ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye. */
  eyeColor?: Maybe<Scalars['String']>;
  /** The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair. */
  hairColor?: Maybe<Scalars['String']>;
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['String']>;
  /** The URL of a planet resource, a planet that this person was born on or inhabits. */
  homeworld?: Maybe<Scalars['String']>;
  /** The name of this person */
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getRandomPerson?: Maybe<Person>;
};

export type GetStarWarsConsoleDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStarWarsConsoleDataQuery = { __typename?: 'Query', getRandomPerson?: { __typename?: 'Person', name?: string | null, birthYear?: string | null, eyeColor?: string | null, hairColor?: string | null, height?: string | null } | null };


export const GetStarWarsConsoleDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStarWarsConsoleData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRandomPerson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthYear"}},{"kind":"Field","name":{"kind":"Name","value":"eyeColor"}},{"kind":"Field","name":{"kind":"Name","value":"hairColor"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<GetStarWarsConsoleDataQuery, GetStarWarsConsoleDataQueryVariables>;