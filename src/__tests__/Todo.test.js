import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import "@testing-library/jest-dom/extend-expect";

test("displays initial to-dos", () => {
  const { getByTestId } = render(<Todo />);
  const todos = getByTestId("todos");
  expect(todos.children.length).toBe(2);
});

test("adds a new to-do", () => {
  const { getByTestId, getByText } = render(<Todo />);
  const input = getByTestId("input");
  const todos = getByTestId("todos");

  input.value = "Fix failing tests";
  fireEvent.click(getByText("Add Task"));
  expect(todos.children.length).toBe(3);
});
test("deletes a to-do", () => {
  const { getAllByTestId, getByTestId } = render(<Todo />);
  const todos = getByTestId("todos");
  const deleteButton = getAllByTestId("delete-button");
  const first = deleteButton[0];
  fireEvent.click(first);
  expect(todos.children.length).toBe(1);
});

