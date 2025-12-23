import { TaxCalculation } from '../../domain/entities/TaxCalculation';
import { TaxCalculatorService } from '../../domain/services/TaxCalculatorService';

export class CalculateTaxUseCase {
  private taxCalculator: TaxCalculatorService;

  constructor() {
    this.taxCalculator = new TaxCalculatorService();
  }

  execute(income: number, deductions: number): TaxCalculation {
    if (income < 0 || deductions < 0) {
      throw new Error('Los valores deben ser positivos');
    }

    const result = this.taxCalculator.calculateTax(income, deductions);
    
    // In a real hexagonal app, we might call analytics or repo ports here
    
    return result;
  }
}
