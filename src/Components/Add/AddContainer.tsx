import React, {useContext, useState} from 'react';
import {getExpenseGroups, getExpenseTags} from "../../Api/Client";
import {
  ExpenseType,
  GroupLeafType,
  GroupNodeType,
} from "../../Api/Contract/ExpenseType";
import {AddSubGroup} from "./AddSubGroup";
import {AddGroup} from "./AddGroup";
import {AddTags} from "./AddTags";
import {SettingsContext} from "../../Contexts/SettingsContext";

type AddContainerProps = {};

export const AddContainer: React.FC<AddContainerProps> = (props) => {
  const settings = useContext(SettingsContext);
  const [error, setError] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [moneyUnit, setMoneyUnit] = useState<number>(0);
  const [moneyFractional, setMoneyFractional] = useState<number>(0);
  const [toggledNodeGroup, setToggledNodeGroup] = useState<GroupNodeType | null>(null);
  const [toggledLeafGroup, setToggledLeafGroup] = useState<GroupLeafType | null>(null);

  const groups = getExpenseGroups();
  const tags = getExpenseTags();

  const typeMoneyUnit = (e: React.BaseSyntheticEvent) => {
    let value = parseInt(e.target.value, 10) || 0;
    if (value < 0) {
      return;
    }
    setMoneyUnit(value);
  };

  const typeMoneyFractional = (e: React.BaseSyntheticEvent) => {
    let value = parseInt(e.target.value, 10) || 0;
    if (value < 0 || value > 99) {
      return;
    }
    setMoneyFractional(value)
  };

  const saveExpense = () => {
    if (moneyUnit === 0 && moneyFractional === 0) {
      setError('Wpisz kwotę!');
      return;
    }

    if (!toggledLeafGroup || !toggledNodeGroup) {
      setError('Wybierz grupę!');
      return;
    }

    // @todo: remove this workaround
    setError("");

    if (settings.loading) {
      console.error('Could not get settings!');
      return;
    }

    const expense: ExpenseType = {
      amount: {
        unit: moneyUnit,
        fractional: moneyFractional
      },
      group: toggledNodeGroup,
      subgroup: toggledLeafGroup,
      label,
      date: new Date(),
      tags: [], // @todo
      account: settings.account,
      executor: settings.member,
    };

    console.log('Saving...', expense)
  };

  if (settings.loading) {
    return <div className="add">
      <div className="alert alert-primary" role="alert">
        Loading settings...
      </div>
    </div>
  }

  return <>
    <div className="add">
      {error !== "" ?
        <div className="alert alert-danger" role="alert">
          {error}
        </div> : null
      }
      <div className="add-amount">
        <div className="input-group mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text">Kwota</span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Kwota (złotych)"
            onChange={typeMoneyUnit}
            value={moneyUnit}
          />
          <div className="input-group-append">
            <span className="input-group-text">,</span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Kwota (groszy)"
            onChange={typeMoneyFractional}
            value={moneyFractional}
          />
          <div className="input-group-append">
            <span className="input-group-text">PLN</span>
          </div>
        </div>
      </div>
      <div className="add-groups">
        <input
          placeholder="Opis (opcjonalnie)"
          type="text"
          className="form-control"
          name="label"
          onChange={e => setLabel(e.target.value)}
          value={label}
        />
        <AddGroup
          groups={groups}
          toggled={toggledNodeGroup}
          toggleMethod={setToggledNodeGroup}
          resetSubGroupMethod={setToggledLeafGroup}
        />
        <br/>
        <AddSubGroup
          group={toggledNodeGroup}
          toggled={toggledLeafGroup}
          toggleMethod={setToggledLeafGroup}
        />
      </div>
      <div className="add-tags">
        <AddTags tags={tags}/>
      </div>
      <div className="add-buttons">
        <button className="btn btn-success button-save" onClick={saveExpense}>Zapisz</button>
      </div>
    </div>
  </>
};
