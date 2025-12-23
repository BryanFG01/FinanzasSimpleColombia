import { CalculateInvestmentUseCase } from '@/application/useCases/CalculateInvestment';
import { CalculateLoanUseCase } from '@/application/useCases/CalculateLoan';
import { CalculateTaxUseCase } from '@/application/useCases/CalculateTax';
import { useState } from 'react';

export type CalculatorType = 'tax' | 'loan' | 'investment';

export const useCalculator = (type: CalculatorType) => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = async (input: any) => {
    setLoading(true);
    setError(null);
    try {
      let res;
      switch (type) {
        case 'tax':
          const taxUseCase = new CalculateTaxUseCase();
          res = taxUseCase.execute(input.income, input.deductions);
          break;
        case 'loan':
          const loanUseCase = new CalculateLoanUseCase();
          res = loanUseCase.execute(input.amount, input.annualRate, input.months);
          break;
        case 'investment':
          const invUseCase = new CalculateInvestmentUseCase();
          res = invUseCase.execute(input.initial, input.monthly, input.annualRate, input.years);
          break;
      }
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Error en el cálculo');
    } finally {
      setLoading(false);
    }
  };

  return { result, calculate, loading, error };
};
