import { useQuery, gql } from "@apollo/client";

import { GetCounter as Query } from "../../types/gql/GetCounter";

const COUNTER_QUERY = gql`
  query GetCounter {
    getCounter {
      id
      count
      lastModified
    }
  }
`;

export function useCounterQuery() {
  const { data, error, loading } = useQuery<Query>(COUNTER_QUERY);
  const counter = data?.getCounter ?? null;

  return { counter, error, loading };
}
