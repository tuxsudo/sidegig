import { useMutation, gql } from "@apollo/client";
import { Increment as Mutation } from "../../types/gql/Increment";

import { GhostButton } from "../button/ghost";

const INCREMENT_MUTATION = gql`
  mutation Increment {
    incrementCounter {
      counter {
        id
        count
        lastModified
      }
    }
  }
`;

export function useIncrementMutation() {
  const [mutateFn] = useMutation<Mutation>(INCREMENT_MUTATION);
  return mutateFn;
}

export function PlusButton() {
  const mutation = useIncrementMutation();
  return (
    <GhostButton
      onClick={(e) => {
        e.preventDefault();
        mutation();
      }}
    >
      +
    </GhostButton>
  );
}
