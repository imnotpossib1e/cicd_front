import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="Header">
        <Link to="/">HOME-jhyun</Link>
        <Link to="/joinForm">회원가입</Link>
        <Link to="/loginForm">로그인</Link>
        <Link to="/saveForm">글쓰기</Link>
      </div>
    </>
  );
}
