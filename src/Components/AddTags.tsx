import {TagType} from "../Api/Contract/ExpenseType";
import React from "react";

const toggleTag = (tag: TagType) => {
  console.log('to be implemented', tag);
};

export const AddTags: React.FC<{tags: Array<TagType>}> = ({tags}) => {
  return <>
    <div className="btn-group" role="group">
      {tags.map((tag: TagType) => (
        <button
          key={tag}
          className={`button-tag btn btn-light`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  </>
};
