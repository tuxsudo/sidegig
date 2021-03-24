import { useMutation, gql } from "@apollo/client";
import { Decrement as Mutation } from "../../types/gql/Decrement";

import { GhostButton } from "../button/ghost";
import { Icon } from "../icons/minus";

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
    <GhostButton
      onClick={(e) => {
        e.preventDefault();
        mutation();
      }}
    >
      <Icon />
    </GhostButton>
  );
}
