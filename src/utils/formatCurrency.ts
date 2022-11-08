type Options = {
  country: string;
  currency: string;
};
export const formatCurrency = (value?: number, options?: Options) =>
  value?.toLocaleString(options?.country ?? "en-US", {
    style: "currency",
    currency: options?.currency ?? "USD",
  }) ?? "0";
