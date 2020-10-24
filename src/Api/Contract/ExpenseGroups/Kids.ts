import {Other} from "./Other";

type Education = {
  label: "Szkoła i przedszkole"
}

type Clothes = {
  label: "Ubrania dziecięce"
}

type Toys = {
  label: "Zabawki"
}

export type Kids = {
  label: "Dzieci";
  subGroup: Education | Clothes | Toys | Other;
}
