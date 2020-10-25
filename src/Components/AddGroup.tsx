import React, {Dispatch, SetStateAction} from "react";
import {GroupNodeType} from "../Api/Contract/ExpenseType";

type AddGroupPropsType = {
  groups: Array<GroupNodeType>;
  toggled: GroupNodeType | null;
  toggleMethod: Dispatch<SetStateAction<GroupNodeType | null>>;
}

export const AddGroup: React.FC<AddGroupPropsType> = ({groups, toggled, toggleMethod}) => {
  const toggleNodeGroup = (expenseGroup: GroupNodeType) => {
    toggleMethod((toggled) => (
      toggled && toggled.type === expenseGroup.type ? null : expenseGroup
    ));
  };

  return <>
    <h4>Wybierz grupę</h4>
    {groups.map((eg: GroupNodeType) => (
      <button
        key={eg.type}
        className={`button-group ${toggled && toggled.type === eg.type ? "button-group-toggled" : ""}`}
        onClick={() => toggleNodeGroup(eg)}
      >
        {eg.label}
      </button>
    ))}
  </>
};
