/* eslint-disable */
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
