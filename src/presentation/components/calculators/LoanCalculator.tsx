import { Button } from '@/presentation/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Input } from '@/presentation/components/ui/input';
import { Label } from '@/presentation/components/ui/label';
import { useCalculator } from '@/presentation/hooks/useCalculator';
import { useState } from 'react';

export const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  
  const { result, calculate, loading, error } = useCalculator('loan');

  const handleCalculate = () => {
    calculate({
      amount: parseFloat(amount),
      annualRate: parseFloat(rate),
      months: parseInt(months)
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Calculadora de Crédito</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Monto del Préstamo ($)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="50000000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rate">Tasa Efectiva Anual (%)</Label>
          <Input
            id="rate"
            type="number"
            placeholder="15.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="months">Plazo (Meses)</Label>
          <Input
            id="months"
            type="number"
            placeholder="60"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
        </div>

        <Button 
          onClick={handleCalculate} 
          className="w-full"
          disabled={loading || !amount || !rate || !months}
        >
          {loading ? 'Calculando...' : 'Calcular'}
        </Button>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-2 animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Cuota Mensual:</span>
              <span className="text-primary">
                ${result.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
             <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t">
              <span>Total Intereses:</span>
              <span>${result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Total a Pagar:</span>
              <span>${result.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
