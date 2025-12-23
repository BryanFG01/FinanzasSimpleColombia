export interface TaxCalculation {
  income: number;
  deductions: number;
  taxableIncome: number;
  taxRate: number;
  taxAmount: number;
  netIncome: number;
  calculatedAt: Date;
}
