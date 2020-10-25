import {AccountType} from "./AccountType";
import {MemberType} from "./MemberType";

export type AmountType = {
  unit: number;
  fractional: number;
}

export type GroupType = {
  type: string;
  label: string;
}
export type GroupNodeType = GroupType & { children: Array<GroupLeafType> }
export type GroupLeafType = GroupType

export type TagType = string;

export type ExpenseType = {
  amount: AmountType;
  date: Date;
  label: string | null;
  group: GroupLeafType;
  tags: Array<TagType>;
  account: AccountType;
  executor: MemberType;
}
