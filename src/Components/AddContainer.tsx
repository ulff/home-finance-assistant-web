import React, {useState} from 'react';
import {getExpenseGroups, getExpenseTags} from "../Api/Client";
import {
  ExpenseGroupLeafType,
  ExpenseGroupNodeType, ExpenseTagType
} from "../Api/Contract/ExpenseType";

type AddContainerProps = {};

const ExpenseGroupLeaf: React.FC<{group: ExpenseGroupNodeType | null}> = ({group}) => {
  const [toggledLeafGroup, setToggledLeafGroup] = useState<ExpenseGroupLeafType | null>(null);

  const selectLeafGroup = (expenseGroup: ExpenseGroupLeafType) => {
    setToggledLeafGroup((toggledLeafGroup) => (
      toggledLeafGroup && toggledLeafGroup.type === expenseGroup.type ? null : expenseGroup
    ));
  };

  if (!group || group.children.length === 0) return null;

  return <>
    <h4>Wybierz podgrupę</h4>
    {group.children.map((eg: ExpenseGroupLeafType) => (
      <button
        key={eg.type}
        className={`button-group ${toggledLeafGroup && toggledLeafGroup.type === eg.type ? "button-group-toggled" : ""}`}
        onClick={() => selectLeafGroup(eg)}
      >
        {eg.label}
      </button>
    ))}
  </>
};

export const AddContainer: React.FC<AddContainerProps> = (props) => {
  const [toggledNodeGroup, setToggledNodeGroup] = useState<ExpenseGroupNodeType | null>(null);

  const toggleNodeGroup = (expenseGroup: ExpenseGroupNodeType) => {
    setToggledNodeGroup((toggledNodeGroup) => (
      toggledNodeGroup && toggledNodeGroup.type === expenseGroup.type ? null : expenseGroup
    ));
  };

  const toggleTag = (tag: ExpenseTagType) => {
    console.log('to be implemented', tag);
  };

  const expenseGroups = getExpenseGroups();
  const expenseTags = getExpenseTags();

  return <>
    <div className="add">
      <div className="add-amount">
        <h3>Kwota</h3>
        <input type="text" name="moneyUnit"/>, <input type="text" name="moneyFractional"/> PLN
      </div>
      <div className="add-expense">
        <h3>Przeznaczenie</h3>
        <div className="add-groups">
          <h4>Wybierz grupę</h4>
          {expenseGroups.map((eg: ExpenseGroupNodeType) => (
            <button
              key={eg.type}
              className={`button-group ${toggledNodeGroup && toggledNodeGroup.type === eg.type ? "button-group-toggled" : ""}`}
              onClick={() => toggleNodeGroup(eg)}
            >
              {eg.label}
            </button>
          ))}
          <br/>
          <ExpenseGroupLeaf group={toggledNodeGroup} />
        </div>
      </div>
      <div className="add-tags">
        <h3>Tagi</h3>
        {expenseTags.map((tag: ExpenseTagType) => (
          <button
            key={tag}
            className={`button-tag`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="add-buttons">
        <button className="button-save">Zapisz</button>
      </div>
    </div>
  </>
};
