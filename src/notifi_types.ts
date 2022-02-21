export enum CardDisplayMode {
  "narrow",
  "wide",
}

export enum DisplayMode {
  "protocols" = "Protocols",
  "positions" = "Positions",
  "subscriptions" = "Subscriptions",
  "subscribe" = "Subscribe",
}

export enum AlertHistoryStatus {
  "sent" = "Sent",
  "pending" = "Pending",
  "error" = "Error",
}

export enum UserMode {
  "user" = "user",
  "manager" = "manager",
}

export type SidebarDescriptor = {
  title: string;
  icon: string;
  to: string;
  text_color?: string;
};

export type SummaryItem = {
  name: string;
  quantity: number;
  limit: number;
};

export enum ProtocolLevel {
  "Free" = "Free",
  "Basic" = "Basic",
  "Gold" = "Gold",
}

export enum StakingLevel {
  "free" = "Free",
  "basic" = "Basic",
  "gold" = "Gold",
}

export enum SiteStatus {
  "requested" = "Requested",
  "pending" = "Pending",
  "inprogress" = "In-Progress",
  "active" = "Active",
}

export type TokenData = {
  symbol: string;
  contractAddress: string;
  chain: string;
  basicQuantity: number;
  goldQuantity: number;
};

export enum LimitType {
  "category" = "Category",
  "contracts" = "Contracts",
  "events" = "Events",
  "managers" = "Managers",
  "subscriptions" = "Subscriptions",
}

export type UserFrequenciesValue = "day" | "hour";
export type UserFrequenciesName = "Once a Day" | "Once an Hour";

export const UserFrequency: Record<UserFrequenciesValue, UserFrequenciesName> =
  {
    day: "Once a Day",
    hour: "Once an Hour",
  };

export type ValueOperatorSymbol = ">" | "<" | "=";
export type ValueOperatorName = "Great Than" | "Less Than" | "Equal To";

export const ValueOperatorNames: Record<
  ValueOperatorSymbol,
  ValueOperatorName
> = {
  ">": "Great Than",
  "<": "Less Than",
  "=": "Equal To",
};
