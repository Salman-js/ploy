declare global {
  interface Number {
    formatCurrency(
      currencyCode?: string,
      minFractionDigits?: number,
      maxFractionDigits?: number
    ): string;
    formatNumber(): string;
    formatThreshold(): string;
  }
}

export {};
