import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";

const CourseForm = ({
  course,
  allAuthor,
  saving,
  onSave,
  onChange,
  errors
}) => {
  return (
    <form className="container">
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        options={allAuthor}
        defaultOptions="Select Author"
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={event => onSave(event)}
      />
    </form>
  );
};

CourseForm.propTypes = {
  allAuthord: PropTypes.array,
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
