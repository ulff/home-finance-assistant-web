import {Other} from "./Other";

type Restaruants = {
  label: "Restauracje i zamówienia";
}

type Parties = {
  label: "Imprezy i spotkania";
}

type Culture = {
  label: "Kino i kultura";
}

type SportsAndOutdoors = {
  label: "Sport i outdoor";
}

export type Entertainment = {
  label: "Rozrywka";
  subGroup: Restaruants | Parties | Culture | SportsAndOutdoors | Other;
}
