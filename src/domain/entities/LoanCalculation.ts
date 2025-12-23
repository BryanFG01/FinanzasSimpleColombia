export interface LoanCalculation {
  amount: number;
  interestRate: number; // Monthly or Annual? Typically annual in UI, converted in service. Storing effective monthly? Let's say Annual %.
  termMonths: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  calculatedAt: Date;
}
