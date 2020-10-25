import React, {Dispatch, SetStateAction} from "react";
import {GroupLeafType, GroupNodeType} from "../Api/Contract/ExpenseType";

type AddGroupPropsType = {
  groups: Array<GroupNodeType>;
  toggled: GroupNodeType | null;
  toggleMethod: Dispatch<SetStateAction<GroupNodeType | null>>;
  resetSubGroupMethod: Dispatch<SetStateAction<GroupLeafType | null>>;
}

export const AddGroup: React.FC<AddGroupPropsType> = ({groups, toggled, toggleMethod, resetSubGroupMethod}) => {
  const toggleNodeGroup = (expenseGroup: GroupNodeType) => {
    toggleMethod((toggled) => (
      toggled && toggled.type === expenseGroup.type ? null : expenseGroup
    ));
    resetSubGroupMethod(null);
  };

  return <>
    <div className="btn-group my-2" role="group">
      {groups.map((eg: GroupNodeType) => (
        <button
          key={eg.type}
          className={`button-group btn btn-${toggled && toggled.type === eg.type ? "primary" : "secondary"}`}
          onClick={() => toggleNodeGroup(eg)}
        >
          {eg.label}
        </button>
      ))}
    </div>
  </>
};
