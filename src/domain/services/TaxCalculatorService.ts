import { TaxCalculation } from '../entities/TaxCalculation';

export class TaxCalculatorService {
  calculateTax(income: number, deductions: number): TaxCalculation {
    const taxableIncome = Math.max(0, income - deductions);
    const taxRate = this.getTaxRate(taxableIncome);
    const taxAmount = taxableIncome * taxRate;
    
    return {
      income,
      deductions,
      taxableIncome,
      taxRate,
      taxAmount,
      netIncome: income - taxAmount,
      calculatedAt: new Date()
    };
  }

  private getTaxRate(taxableIncome: number): number {
    // Tabla de retención 2025
    if (taxableIncome <= 4500000) return 0;
    if (taxableIncome <= 9000000) return 0.19;
    if (taxableIncome <= 15000000) return 0.28;
    return 0.33;
  }
}
