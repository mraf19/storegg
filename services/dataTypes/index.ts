export type CategoryTypes = {
  _id: string;
  name: string;
};

export type FeaturedGameTypes = {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
};

export type NominalTypes = {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
};

export type BankTypes = {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
};

export type PaymentTypes = {
  _id: string;
  status: string;
  type: string;
  banks: BankTypes[];
};

export type LogInTypes = {
  email: string;
  password: string;
};

export type UserTypes = {
  id: string;
  username: string;
  name: string;
  email: string;
  avatar: string;
};

export type JWTPayloadTypes = {
  player: UserTypes;
  iat: number;
};

export type CheckOutTypes = {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
};

export type TopUpCategoriesTypes = {
  name: string;
  valeu: number;
};

export type HistoryVoucherTopupTypes = {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
};

export type HistoryPaymentTypes = {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
};
export type HistoryTransactionTypes = {
  historyVoucherTopup: HistoryVoucherTopupTypes;
  status: string;
  _id: string;
  accountUser: string;
  tax: number;
  value: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
};

export type DataItemTypes = {
  status: string;
  nominals: NominalTypes[];
  _id: string;
  name: string;
  category: CategoryTypes;
  isFeatured: boolean;
  thumbnail: string;
  user: UserTypes;
  __v: 0;
};
