import NavItem from "./NavItem";
import { BsBuilding } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Sidenav() {
  return (
    <>
      <div className="col-auto col-sm-2 bg-dark d-flex flex-column align-items-stretch vh-100 text-white px-2">
        <button
          type="button"
          className="btn text-decoration-none text-white d-flex align-items-center my-2 fs-6"
          style={{ width: "100%" }}
        >
          <span className="pe-2 d-flex align-items-baseline">
            <BsBuilding />
          </span>
          Antenna
        </button>
        <NavItem />

        <div className="mt-auto"></div>

        <button
          type="button"
          className="btn btn-outline-secondary text-decoration-none text-white d-flex align-items-center mb-2"
          style={{ width: "100%" }}
        >
          <span className="pe-2 d-flex align-items-baseline">
            <IoIosHelpCircleOutline />
          </span>
          Contact
        </button>
      </div>
    </>
  );
}
