import React, {useState} from 'react';
import {getExpenseGroups, getExpenseTags} from "../Api/Client";
import {
  GroupLeafType,
  GroupNodeType,
} from "../Api/Contract/ExpenseType";
import {AddSubGroup} from "./AddSubGroup";
import {AddGroup} from "./AddGroup";
import {AddTags} from "./AddTags";

type AddContainerProps = {};

export const AddContainer: React.FC<AddContainerProps> = (props) => {
  const [toggledNodeGroup, setToggledNodeGroup] = useState<GroupNodeType | null>(null);
  const [toggledLeafGroup, setToggledLeafGroup] = useState<GroupLeafType | null>(null);

  const groups = getExpenseGroups();
  const tags = getExpenseTags();

  return <>
    <div className="add">
      <div className="add-amount">
        <h3>Kwota</h3>
        <input type="text" name="moneyUnit"/>, <input type="text" name="moneyFractional"/> PLN
      </div>
      <div className="add-groups">
        <h3>Przeznaczenie</h3>
        <AddGroup
          groups={groups}
          toggled={toggledNodeGroup}
          toggleMethod={setToggledNodeGroup}
        />
        <br/>
        <AddSubGroup
          group={toggledNodeGroup}
          toggled={toggledLeafGroup}
          toggleMethod={setToggledLeafGroup}
        />
      </div>
      <div className="add-tags">
        <h3>Tagi</h3>
        <AddTags tags={tags}/>
      </div>
      <div className="add-buttons">
        <button className="button-save">Zapisz</button>
      </div>
    </div>
  </>
};
