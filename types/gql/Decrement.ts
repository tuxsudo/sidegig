/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Decrement
// ====================================================

export interface Decrement_decrementCounter_counter {
  __typename: "Counter";
  id: string | null;
  count: number | null;
  lastModified: any | null;
}

export interface Decrement_decrementCounter {
  __typename: "DecrementCounterResponse";
  counter: Decrement_decrementCounter_counter | null;
}

export interface Decrement {
  decrementCounter: Decrement_decrementCounter | null;
}
