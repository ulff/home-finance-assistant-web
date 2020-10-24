import {Other} from "./Other";

type Mortgage = {
  label: "Kredyt hipoteczny"
}

type RentAndElectricity = {
  label: "Czynsz i prąd"
}

type MediaBills = {
  label: "Rachunki za multimedia"
}

export type Living = {
  label: "Mieszkaniowe";
  subGroup: Mortgage | RentAndElectricity | MediaBills | Other;
}
