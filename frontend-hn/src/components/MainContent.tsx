import Table from "./Table";
import { BsBuilding } from "react-icons/bs";

export default function MainContent() {
  const table_entries = [
    [
      "Hello",
      "World",
      "Nice",
      "Content",
      "Placeholder",
      "Another",
      "Placeholder",
      "Last Item",
    ],
  ];
  return (
    <>
      <div className="card vh-100 m-1" style={{ width: "100%" }}>
        {/* <div className="card-body h-100"> */}
        <div className="container d-flex align-items-center mb-3">
          <div className="fs-1 pb-3 pe-2">
            <BsBuilding />
          </div>
          <div className="">
            <h4 className="card-title">Company</h4>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Company Mission
            </h6>
          </div>
        </div>

        <div className="container h-75 overflow-x-scroll overflow-y-scroll">
          <Table table_entries={table_entries} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
