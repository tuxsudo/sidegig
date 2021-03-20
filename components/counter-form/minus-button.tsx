import { useMutation, gql } from "@apollo/client";
import { Decrement as Mutation } from "../../types/gql/Decrement";

const DECREMENT_MUTATION = gql`
  mutation Decrement {
    decrementCounter {
      counter {
        id
        count
        lastModified
      }
    }
  }
`;

export function useDecrementMutation() {
  const [mutateFn] = useMutation<Mutation>(DECREMENT_MUTATION);
  return mutateFn;
}

export function MinusButton() {
  const mutation = useDecrementMutation();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        mutation();
      }}
    >
      -
    </button>
  );
}
