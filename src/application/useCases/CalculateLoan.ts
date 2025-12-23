import { LoanCalculation } from '../../domain/entities/LoanCalculation';
import { LoanCalculatorService } from '../../domain/services/LoanCalculatorService';

export class CalculateLoanUseCase {
  private loanCalculator: LoanCalculatorService;

  constructor() {
    this.loanCalculator = new LoanCalculatorService();
  }

  execute(amount: number, annualRate: number, months: number): LoanCalculation {
    if (amount <= 0 || annualRate < 0 || months <= 0) {
      throw new Error('Valores inválidos para crédito');
    }

    return this.loanCalculator.calculateLoan(amount, annualRate, months);
  }
}
