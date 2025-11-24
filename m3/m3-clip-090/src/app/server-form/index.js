import { saveNameAction } from "./actions/save-name";
import SubmitButton from "./submit-button";
export default function ServerForm() {
  return (
    <form method="POST" action={saveNameAction} className="mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" name="name" type="text"
          className="form-control" />
      </div>
      <SubmitButton />
    </form>
  );
}
