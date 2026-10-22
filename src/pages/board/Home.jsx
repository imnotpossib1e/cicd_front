import BoardItem from "../../components/BoardItem";

export default function Home() {
  return (
    <div className="Home">
      <h1>전체 게시물 LUST</h1>
      <BoardItem title={"Spring1"} writer={"장희정"} />
      <BoardItem title={"Spring1"} writer={"장희정"} />
      <BoardItem title={"Spring1"} writer={"장희정"} />
      <BoardItem title={"Spring1"} writer={"장희정"} />
    </div>
  );
}
