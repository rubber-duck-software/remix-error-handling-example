# Remix Error Handling Example

## The Scenario

Welcome to Rubber Duck Kayak Rentals! We rent Kayaks to users in poor
network conditions.

Sometimes our users try to submit a form but can't because of network issues!
When this happens, we want to show a helpful error dialog explaining that their
rental could not be processed and they should try to submit the form again.

What we _don't_ want to have happen is for their form data to be lost when
their form submission fails.

**The Question:** How can we implement a form in Remix which withstands
network issues without losing the data entered by the user?

**The Problem:** If we encounter network issues when this form is submitted, we
render the ErrorBoundary associated with the route. When this happens, we
lose all the data the user entered!

## Helpful Links

The Remix docs talk about maintaining form state in case of server error (does
not mention network errors). See
https://remix.run/docs/en/1.14.3/guides/optimistic-ui#maintain-form-state

The Remix docs talk about using progressive enhancement to ensure your UI is
resilient to network issues. See
https://remix.run/docs/en/1.14.3/tutorials/blog#progressive-enhancement

## About this repository

This repository exists as an example of how Remix handles network errors.
There are two forms in this example site.

1. The first form is at the index route (`/`). To my knowledge, this form
   utilizes Remix error handling in a very standard way and illustrates
   the problem described above (user input is lost on when form submission
   encounters network errors).
2. The second form demonstrates a workaround which achieves the desired
   error handling behavior, but the workaround is really terrible and cannot
   be generalized, so that an app wanted to implement this error handling on
   every form would be greatly burdened by boilerplate.

To run this repository, simply clone the repo locally, run `pnpm i`, and lastly
`pnpm dev`.
