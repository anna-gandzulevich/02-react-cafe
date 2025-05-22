// VoteStats.tsx
interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={"container"}>
      <p className={"stat"}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={"stat"}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={"stat"}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={"stat"}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={"stat"}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}
