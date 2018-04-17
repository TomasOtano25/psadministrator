import React from "react";
import { shallow, mount } from "enzyme";
import { ManageCoursePage } from "./ManageCoursePage";

const props = {
  authors: [],
  course: {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    category: "",
    length: ""
  },
  actions: {
    saveCourse: () => {
      return Promise.resolve();
    }
  }
};

describe("Manage Course Page", () => {
  it("sets error message when trying to save empty title", () => {
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");
    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toEqual(
      "Title must be at least 5 charaters."
    );
  });
});
