import { CiHome } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";

import "../App.css";
export default function NavItem() {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary text-decoration-none text-white d-flex align-items-center mt-2"
          style={{ width: "100%" }}
        >
          <span className="pe-2 d-flex align-items-baseline">
            <CiHome />
          </span>
          Home
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary text-decoration-none text-white d-flex align-items-center mt-2"
          style={{ width: "100%" }}
        >
          <span className="pe-2 d-flex align-items-baseline">
            <MdAccountCircle />
          </span>
          Account
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary text-decoration-none text-white d-flex align-items-center mt-2"
          style={{ width: "100%" }}
        >
          <span className="pe-2 d-flex align-items-baseline">
            <IoIosHelpCircleOutline />
          </span>
          More
        </button>
      </div>
    </>
  );
}
