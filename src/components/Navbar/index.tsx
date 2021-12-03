import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="uk-navbar">
      <div className="uk-navbar-left">
        <Link className="uk-navbar-item uk-logo" to="/">
          My Todos
        </Link>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/create">
              <span uk-icon="icon: plus; ratio 1.2"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
