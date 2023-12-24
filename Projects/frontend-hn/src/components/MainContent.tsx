import Table from "./Table";

export default function MainContent() {
  return (
    <>
      <div className="card min-height-100vh m-1" style={{ width: "100%" }}>
        <div className="card-body">
          <h4 className="card-title">Company</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Company Mission
          </h6>
          <Table />
        </div>
      </div>
    </>
  );
}
