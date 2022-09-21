import { Link } from 'react-router-dom';

function Navb() {
  return (
    <nav className="nav">
      <h1 className="title">Math Magicians</h1>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <hr />
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <hr />

        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navb;
