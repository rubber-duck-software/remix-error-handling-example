import { redirect } from "@remix-run/node";
import { useRouteError } from "@remix-run/react";
import React from "react";

export async function loader() {
  return redirect("..");
}

export async function action() {
  try {
    return redirect("/success");
  } catch (e) {
    return redirect("..");
  }
}

export function ErrorBoundary() {
  const error = useRouteError();
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    setOpen(true);
  }, [error]);
  return (
    <dialog open={open} onClose={() => setOpen(false)}>
      <h1>Whoops! Something happened...</h1>
      <p>Make sure you are connected in the internet and try again.</p>
      <button onClick={() => setOpen(false)}>Ok</button>
    </dialog>
  );
}
