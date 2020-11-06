import {GroupNodeType, TagType} from "../Contract/ExpenseType";
import {AccountType} from "../Contract/AccountType";
import {MemberType} from "../Contract/MemberType";

export type SettingsType = {
  account: AccountType,
  member: MemberType
}

export function getSettings(): Promise<SettingsType> {
  return new Promise((resolve) => {
    resolve({
      account: {
        number: "68 1140 2004 0000 3102 3436 1372",
          label: "eKonto - moje"
      },
      member: {
        firstname: "Olaf",
          lastname: "Gałązka"
      }
    });
  });
}

export function getExpenseTags(): Array<TagType> {
  return [
    "#żabka",
    "#biedronka",
    "#alkohol",
    "#przekąski"
  ];
}

export function getExpenseGroups(): Array<GroupNodeType> {
  return [
    {
      type: "life",
      label: "Codzienne",
      children: [
        {
          type: "food",
          label: "Żywność",
        },
        {
          type: "cleaning",
          label: "Chemia domowa",
        },
        {
          type: "home",
          label: "Wyposażenie domowe",
        },
        {
          type: "other",
          label: "Inne",
        }
      ]
    },
    {
      type: "entertainment",
      label: "Rozrywka",
      children: [
        {
          type: "restaruants",
          label: "Restauracje i zamówienia",
        },
        {
          type: "parties",
          label: "Imprezy i spotkania",
        },
        {
          type: "culture",
          label: "Kino i kultura",
        },
        {
          type: "outdoors",
          label: "Sport i turystyka",
        },
        {
          type: "other",
          label: "Inne",
        }
      ]
    },
    {
      type: "kids",
      label: "Dzieci",
      children: [
        {
          type: "education",
          label: "Szkoła i przedszkole",
        },
        {
          type: "clothes",
          label: "Ubrania dziecięce",
        },
        {
          type: "toys",
          label: "Zabawki",
        },
        {
          type: "trips",
          label: "Atrakcje",
        },
        {
          type: "other",
          label: "Inne",
        }
      ]
    },
    {
      type: "car",
      label: "Samochodowe",
      children: [
        {
          type: "fuel",
          label: "Paliwo",
        },
        {
          type: "insurance",
          label: "Ubezpieczenie",
        },
        {
          type: "loan",
          label: "Kredyt samochodowy",
        },
        {
          type: "mechanics",
          label: "Warsztaty i naprawy",
        },
        {
          type: "service",
          label: "Serwis i eksploatacja",
        },
        {
          type: "other",
          label: "Inne",
        }
      ]
    },
    {
      type: "house",
      label: "Mieszkaniowe",
      children: [
        {
          type: "mortgage",
          label: "Kredyty hipoteczne",
        },
        {
          type: "rent",
          label: "Czynsz i rachunki",
        },
        {
          type: "multimedia",
          label: "Rachunki za multimedia",
        },
        {
          type: "other",
          label: "Inne",
        }
      ]
    },
    {
      type: "other",
      label: "Pozostałe",
      children: []
    }
  ];
};
