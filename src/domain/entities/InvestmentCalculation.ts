export interface InvestmentCalculation {
  initialAmount: number;
  monthlyContribution: number;
  annualInterestRate: number;
  years: number;
  finalBalance: number;
  totalPrincipal: number;
  totalInterestEarned: number;
  calculatedAt: Date;
}
