import React, {Dispatch, SetStateAction} from "react";
import {GroupLeafType, GroupNodeType} from "../Api/Contract/ExpenseType";

type AddSubGroupPropsType = {
  group: GroupNodeType | null;
  toggled: GroupLeafType | null;
  toggleMethod: Dispatch<SetStateAction<GroupLeafType | null>>;
}

export const AddSubGroup: React.FC<AddSubGroupPropsType> = ({group, toggled, toggleMethod}) => {
  const selectLeafGroup = (expenseGroup: GroupLeafType) => {
    toggleMethod((toggled) => (
      toggled && toggled.type === expenseGroup.type ? null : expenseGroup
    ));
  };

  if (!group || group.children.length === 0) return null;

  return <>
    <h4>Wybierz podgrupę</h4>
    {group.children.map((eg: GroupLeafType) => (
      <button
        key={eg.type}
        className={`button-group ${toggled && toggled.type === eg.type ? "button-group-toggled" : ""}`}
        onClick={() => selectLeafGroup(eg)}
      >
        {eg.label}
      </button>
    ))}
  </>
};
