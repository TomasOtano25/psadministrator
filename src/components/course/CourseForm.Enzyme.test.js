import React from "react";
import { mount, shallow } from "enzyme";
import CourseForm from "./CourseForm";

function setup(saving) {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe("CourseForm via Enzyme", () => {
  it("render forms and h1", () => {
    const wrapper = setup(false);
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Manage Course");
  });

  it("save button labeled 'save' when not saving", () => {
    const wrapper = setup(false);
    expect(wrapper.find("input").props().value).toBe("Save");
  });

  it("save button labeled 'Saving...' when saving", () => {
    const wrapper = setup(true);
    expect(wrapper.find("input").props().value).toBe("Saving...");
  });
});
