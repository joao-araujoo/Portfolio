import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/">
      <img src="/logo.svg" width="40" height="40" alt="Restored Logo - João Araujo Portfolio" />
    </Link>
  );
}