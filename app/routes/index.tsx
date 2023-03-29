import { redirect } from "@remix-run/node";
import { json, ActionArgs } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import React from "react";

export async function action({ request }: ActionArgs) {
  try {
    return redirect("success");
  } catch (e) {
    throw redirect(".");
  }
}

export default function IndexRoute() {
  return (
    <div>
      <h1>Original Form</h1>
      <Form method="post">
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
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div>
      <h1>Whoops! Something happened...</h1>
      <p>
        The data you entered has been lost 😞.{" "}
        <Link to=".">Return to form</Link>
      </p>
    </div>
  );
}
