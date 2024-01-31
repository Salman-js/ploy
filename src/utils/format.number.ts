Number.prototype.formatCurrency = function (
  currencyCode = 'ETB',
  minFractionDigits = 2,
  maxFractionDigits = 2
) {
  return this.toLocaleString('en-US', {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  });
};

Number.prototype.formatNumber = function () {
  return this.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

Number.prototype.formatThreshold = function () {
  const threshold = 10000;
  if (this >= threshold) {
    const roundedNumber = Math.floor(this / threshold) * threshold;
    return `${roundedNumber.toLocaleString()}+`;
  } else {
    return this.toLocaleString();
  }
};

export const formatThreshold = (number: number, threshold = 10000) => {
  if (number >= threshold) {
    const roundedNumber = Math.floor(number / threshold) * threshold;
    return `${roundedNumber.toLocaleString()}+`;
  } else {
    return number.toLocaleString();
  }
};
