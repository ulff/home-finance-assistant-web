import {Other} from "./Other";

type Food = {
  label: "Żywność"
}

type Cleaning = {
  label: "Chemia domowa"
}

type HomeEquipment = {
  label: "Wyposażenie domowe"
}

export type Life = {
  label: "Codzienne";
  subGroup: Food | Cleaning | HomeEquipment | Other;
}
