import BoardItem from "../../components/BoardItem";

export default function Home() {
  return (
    <div className="Home">
      <h1>전체 게시물 LIST</h1>
      <BoardItem title={"Spring1"} writer={"장희정"} />
      <BoardItem title={"Spring2"} writer={"김이름"} />
      <BoardItem title={"Spring3"} writer={"박이름"} />
      <BoardItem title={"Spring4"} writer={"정이름"} />
    </div>
  );
}
