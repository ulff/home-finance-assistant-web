import {AccountType} from "./AccountType";
import {MemberType} from "./MemberType";
import {Car} from "./ExpenseGroups/Car";
import {Life} from "./ExpenseGroups/Life";
import {Kids} from "./ExpenseGroups/Kids";
import {Living} from "./ExpenseGroups/Living";
import {Other} from "./ExpenseGroups/Other";

export type AmountType = {
  zl: number;
  gr: number;
}

export type ExpenseGroupType =
  | Car
  | Life
  | Kids
  | Living
  | Other;

export type ExpenseTagType =
  | "Żabka"
  | "Biedronka"
  | "Napoje i przekąski"

export type ExpenseType = {
  amount: AmountType;
  date: Date;
  label: string | null;
  group: ExpenseGroupType;
  tags: Array<ExpenseTagType>;
  account: AccountType;
  executor: MemberType;
}
