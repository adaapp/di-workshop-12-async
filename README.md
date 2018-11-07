# Workshop 12: Async JS

So far, when we've been writing code, everything we write runs in order - one
line after the other, with some jumping around for functions. This is called
synchronous execution - each line waits for the previous line to finish before
it gets run itself. Sometimes, and especially in JavaScript, that's not always
the case. Sometimes, we want a line of code to start some slow thing off, and
then carry on running through the rest of the code whilst we wait for it. This
means our code can run out-of-order - known as asynchronous execution, or async
for short.

Make sure this repo has been forked, cloned, and you've run `npm install`.

## Part 1

Watch
[this screencast](https://adaapp.github.io/screencasts/async-js/index.html), and
make notes. Code along with the video, and at the end of each example take some
time to experiment with the code we write.

## Part 2

Open `test/facts.test.js` and read the code carefully. There are some tasks and
unimplemented tests inside. Run `npm test`. You should see something like:

```
  GET /facts/random
    ✓ returns a 200 status code
    ✓ returns the fact id
    - returns ths fact content

  GET /facts/:factId
    - returns 200 when the fact exists
    ✓ returns the fact with id 1
    - returns the fact with id 5
    - returns 404 if the fact does not exist


  3 passing (21ms)
  4 pending
```

Here, we have a new type of test result. Some of our tests have a `-` next to
them rather than a tick or a cross, and they've been counted at the bottom as
`pending`. That's because we've written the description of the test, but no test
code - an `it(...)` with no `function`. Adding those is your job!

Work through the tasks in that file adding tests. You should be able to run all
your tests against the API.

## Part 3

- Create a new Node project for automating your to do API tests
  - Check the
    [Starting a new Node.js project guide on GitBook](https://adaapp.gitbook.io/digital-innovation/guides/starting-a-new-node.js-project)
    if you're not sure how
  - Make sure you've installed Mocha, Chai, and SuperTest:
    ```sh
    npm install mocha chai supertest
    ```
- Start converting your API test plan into automated tests!
- **IMPORTANT:** Work in the same groups you worked in to define your API tests.
  Try dividing the work between you by all working on the same Git repository
  and pushing/pulling the work between you
  - If you like, try collaborating with branches and pull requests:
    https://help.github.com/articles/proposing-changes-to-your-work-with-pull-requests/
