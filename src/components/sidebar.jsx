import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      classNameName="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
      bis_skin_checked="1"
    >
<<<<<<< HEAD
      <a
        href="/"
=======
      <Link
        to="/"
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
        classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg classNameName="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span classNameName="fs-4">Sidebar</span>
<<<<<<< HEAD
      </a>
=======
      </Link>
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
      <hr />
      <ul classNameName="nav nav-pills flex-column mb-auto">
        <li classNameName="nav-item">
          <Link to="/" classNameName="nav-link text-white" aria-current="page">
            <svg classNameName="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>

        <li>
<<<<<<< HEAD
          <Link to="/create-post" classNameName="nav-link text-white">
=======
          <Link to="/create-post" classNameName="nav-link text-white ">
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
            <svg classNameName="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div classNameName="dropdown" bis_skin_checked="1">
        <a
          href="#"
          classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            classNameName="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a classNameName="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a classNameName="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a classNameName="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr classNameName="dropdown-divider" />
          </li>
          <li>
            <a classNameName="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
