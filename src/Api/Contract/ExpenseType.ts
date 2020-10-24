import {AccountType} from "./AccountType";
import {MemberType} from "./MemberType";

export type AmountType = {
  unit: number;
  fractional: number;
}

export type ExpenseGroupType = {
  type: string;
  label: string;
}
export type ExpenseGroupNodeType = ExpenseGroupType & { children: Array<ExpenseGroupLeafType> }
export type ExpenseGroupLeafType = ExpenseGroupType

export type ExpenseTagType = string;

export type ExpenseType = {
  amount: AmountType;
  date: Date;
  label: string | null;
  group: ExpenseGroupLeafType;
  tags: Array<ExpenseTagType>;
  account: AccountType;
  executor: MemberType;
}
