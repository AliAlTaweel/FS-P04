const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const logger = require("../utils/logger");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

test("of empty list is zero", () => {
  const blogs = [];
  logger.info("total likes");
  const result = listHelper.totalLikes(blogs);
  assert.strictEqual(result, 0);
});

test("when list has only one blog equals the likes of that ", () => {
  const blogs = [
    {
      id: "1",
      title: "First Blog",
      author: "John Doe",
      content: "This is the content of the first blog.",
      likes: 1,
    },
  ];
  const result = listHelper.totalLikes(blogs);
  assert.strictEqual(result, 1);
});

test("of a bigger list is calculated right", () => {
  const blogs = [
    {
      id: "1",
      title: "First Blog",
      author: "John Doe",
      content: "This is the content of the first blog.",
      likes: 5,
    },
    {
      id: "2",
      title: "Second Blog",
      author: "Jane Smith",
      content: "This is the content of the second blog.",
      likes: 10,
    },
    {
      id: "3",
      title: "Third Blog",
      author: "Emily Johnson",
      content: "This is the content of the third blog.",
      likes: 7,
    },
  ];
  const result = listHelper.totalLikes(blogs);
  assert.ok(
    result > 1,
    `Expected result to be greater than 1, but got ${result}`
  );
});
