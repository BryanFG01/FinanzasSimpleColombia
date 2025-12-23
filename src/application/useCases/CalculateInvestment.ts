import { InvestmentCalculation } from '../../domain/entities/InvestmentCalculation';
import { InvestmentService } from '../../domain/services/InvestmentService';

export class CalculateInvestmentUseCase {
  private investmentService: InvestmentService;

  constructor() {
    this.investmentService = new InvestmentService();
  }

  execute(initial: number, monthly: number, annualRate: number, years: number): InvestmentCalculation {
    if (initial < 0 || monthly < 0 || annualRate < 0 || years <= 0) {
      throw new Error('Valores inválidos para inversión');
    }

    return this.investmentService.calculateInvestment(initial, monthly, annualRate, years);
  }
}
