/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Increment
// ====================================================

export interface Increment_incrementCounter_counter {
  __typename: "Counter";
  id: string | null;
  count: number | null;
  lastModified: any | null;
}

export interface Increment_incrementCounter {
  __typename: "IncrementCounterResponse";
  counter: Increment_incrementCounter_counter | null;
}

export interface Increment {
  incrementCounter: Increment_incrementCounter | null;
}
