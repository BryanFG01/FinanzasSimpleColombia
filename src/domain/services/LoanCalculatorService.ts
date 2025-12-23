import { LoanCalculation } from '../entities/LoanCalculation';

export class LoanCalculatorService {
  calculateLoan(amount: number, annualRate: number, months: number): LoanCalculation {
    const monthlyRate = annualRate / 100 / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    
    const totalPayment = payment * months;
    const totalInterest = totalPayment - amount;

    return {
      amount,
      interestRate: annualRate,
      termMonths: months,
      monthlyPayment: payment,
      totalInterest,
      totalPayment,
      calculatedAt: new Date()
    };
  }
}
