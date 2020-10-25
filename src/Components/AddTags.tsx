import {TagType} from "../Api/Contract/ExpenseType";
import React from "react";

const toggleTag = (tag: TagType) => {
  console.log('to be implemented', tag);
};

export const AddTags: React.FC<{tags: Array<TagType>}> = ({tags}) => {
  return <>
    <h4>Wybierz tagi</h4>
    {tags.map((tag: TagType) => (
      <button
        key={tag}
        className={`button-tag`}
        onClick={() => toggleTag(tag)}
      >
        {tag}
      </button>
    ))}
  </>
};
