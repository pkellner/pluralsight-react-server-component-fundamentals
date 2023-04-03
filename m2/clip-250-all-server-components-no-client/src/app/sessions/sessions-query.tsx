import Boundary from "@/lib/boundary";

export default function SessionsQuery() {
  //const query = "";
  //const setQuery = (value: string) => {};

  return (
    <form>
      <div className="input-group mb-1 mt-2">
        <Boundary isServerComponent={false}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            //value={query}
            // onChange={(e) => setQuery(e.target.value)}
          />
        </Boundary>
      </div>
    </form>
  );
}
