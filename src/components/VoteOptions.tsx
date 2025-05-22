import Votes from "..types/votes";

import styles from "./VoteOptions.module.css";

interface VoteOptionsProps {
  votes: Votes;
  onVote: (type: keyof Votes) => void;
  onReset: () => void;
}

export function VoteOptions({ votes, onVote, onReset }: VoteOptionsProps) {
  const total = votes.good + votes.neutral + votes.bad;

  return (
    <div className={"container"}>
      <button className={"button"} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={"button"} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={"button"} onClick={() => onVote("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={"button reset"} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
