import {Other} from "./Other";

type Fuel = {
  label: "Paliwo"
}

type Insurance = {
  label: "Ubezpieczenie"
}

type Mechanics = {
  label: "Warsztaty i naprawy"
}

type Service = {
  label: "Serwis i eksploatacja"
}

export type Car = {
  label: "Samochodowe";
  subGroup: Fuel | Insurance | Mechanics | Service | Other;
}
