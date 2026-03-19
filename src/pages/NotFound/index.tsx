import { Link } from "react-router-dom";
import { RandomDog } from "../../components/RandomDog";

export default function iNotFound() {
  return (
    <div>
      <h1>We looked everywhere.</h1>
      <p>
        Looks like this page is missing. If you still need help, visit our help
        pages.
      </p>
      <Link to="/"> go to homepage</Link>
      <RandomDog />
    </div>
  );
}
