import "server-only"
import Boundary from "@/lib/boundary";

export default function SessionsQuery() {
    return (
    <form>
      <div className="input-group mb-1 mt-2">
        <Boundary isServerComponent={true}>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </Boundary>
      </div>
    </form>
  );
}
