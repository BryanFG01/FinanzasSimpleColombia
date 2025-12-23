import { InvestmentCalculation } from '../entities/InvestmentCalculation';

export class InvestmentService {
  calculateInvestment(initial: number, monthly: number, annualRate: number, years: number): InvestmentCalculation {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    
    // Future Value of a series (monthly contributions)
    // FV = P * (1+r)^n + PMT * [((1+r)^n - 1) / r]
    
    const fvInitial = initial * Math.pow(1 + r, n);
    const fvMonthly = monthly * ((Math.pow(1 + r, n) - 1) / r);
    
    const finalBalance = fvInitial + fvMonthly;
    const totalPrincipal = initial + (monthly * n);
    const totalInterestEarned = finalBalance - totalPrincipal;

    return {
      initialAmount: initial,
      monthlyContribution: monthly,
      annualInterestRate: annualRate,
      years,
      finalBalance,
      totalPrincipal,
      totalInterestEarned,
      calculatedAt: new Date()
    };
  }
}
