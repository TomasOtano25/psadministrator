import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import CourseForm from "./CourseForm";

function setup() {
  let props = {
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  const renderer = new ShallowRenderer();
  renderer.render(<CourseForm {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("CourseForm via React Test Utils", () => {
  it("renders form and h1", () => {
    const { output } = setup();
    expect(output.type).toBe("form");
    let [h1] = output.props.children;
    expect(h1.type).toBe("h1");
  });

  it("save button is labeled 'save' when not saving", () => {
    const { output } = setup();
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });
});
