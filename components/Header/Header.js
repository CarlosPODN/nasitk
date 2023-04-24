import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="head">
      <a href="http://localhost:3000/">
        <FontAwesomeIcon className="ms-4" icon={faHouse} />
      </a>
      <div className="headOptions">
        <a href="http://localhost:3000/account">Account</a>
        <a href="http://localhost:3000/options">Options</a>
      </div>
    </div>
  );
}
