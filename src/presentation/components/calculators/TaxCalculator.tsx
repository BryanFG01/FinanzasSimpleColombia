import { Button } from '@/presentation/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Input } from '@/presentation/components/ui/input';
import { Label } from '@/presentation/components/ui/label';
import { useCalculator } from '@/presentation/hooks/useCalculator';
import { useState } from 'react';

export const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const { result, calculate, loading, error } = useCalculator('tax');

  const handleCalculate = () => {
    calculate({
      income: parseFloat(income),
      deductions: parseFloat(deductions) || 0
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Calculadora de Retención</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="income">Ingreso Mensual ($)</Label>
          <Input
            id="income"
            type="number"
            placeholder="5000000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deductions">Deducciones ($)</Label>
          <Input
            id="deductions"
            type="number"
            placeholder="500000"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
          />
        </div>

        <Button 
          onClick={handleCalculate} 
          className="w-full"
          disabled={loading || !income}
        >
          {loading ? 'Calculando...' : 'Calcular'}
        </Button>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-2 animate-in fade-in slide-in-from-top-2">
            <div className="flex justify-between">
              <span className="font-medium">Ingreso Gravable:</span>
              <span>${result.taxableIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Tasa de Retención:</span>
              <span>{(result.taxRate * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Retención Total:</span>
              <span className="text-primary">
                ${result.taxAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-medium">Ingreso Neto:</span>
              <span>${result.netIncome.toLocaleString()}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
