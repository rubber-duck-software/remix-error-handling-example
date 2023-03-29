import { Outlet } from "@remix-run/react";
import { Form } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div>
      <h1>Workaround</h1>
      <Form method="post" action="./submit">
        <div>
          <label>
            Name:
            <input name="name" />
          </label>
        </div>
        <div>
          <label>
            Kayak:
            <select name="kayak">
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Rent Kayak</button>
        </div>
      </Form>
      <Outlet />
    </div>
  );
}
