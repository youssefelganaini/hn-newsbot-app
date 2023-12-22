import NavItem from "./NavItem";

export default function Sidenav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto col-sm-2 bg-dark d-flex flex-column min-vh-100 text-white">
            <h5 className="p">Company name</h5>
            <NavItem />
          </div>
        </div>
      </div>
    </>
  );
}
