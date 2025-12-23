import { Button } from '@/presentation/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Input } from '@/presentation/components/ui/input';
import { Label } from '@/presentation/components/ui/label';
import { useCalculator } from '@/presentation/hooks/useCalculator';
import { useState } from 'react';

export const InvestmentCalculator = () => {
  const [initial, setInitial] = useState('');
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  
  const { result, calculate, loading, error } = useCalculator('investment');

  const handleCalculate = () => {
    calculate({
      initial: parseFloat(initial) || 0,
      monthly: parseFloat(monthly) || 0,
      annualRate: parseFloat(rate),
      years: parseInt(years)
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simulador de Inversión</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="initial">Inversión Inicial ($)</Label>
            <Input
              id="initial"
              type="number"
              placeholder="1000000"
              value={initial}
              onChange={(e) => setInitial(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="monthly">Aporte Mensual ($)</Label>
            <Input
              id="monthly"
              type="number"
              placeholder="200000"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rate">Rentabilidad E.A. (%)</Label>
            <Input
              id="rate"
              type="number"
              placeholder="10"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="years">Tiempo (Años)</Label>
            <Input
              id="years"
              type="number"
              placeholder="5"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>

        <Button 
          onClick={handleCalculate} 
          className="w-full"
          disabled={loading || (!initial && !monthly) || !rate || !years}
        >
          {loading ? 'Calculando...' : 'Simular Proyección'}
        </Button>

        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-2 animate-in fade-in slide-in-from-top-2">
             <div className="flex justify-between text-lg font-bold">
              <span>Saldo Final:</span>
              <span className="text-primary">
                ${result.finalBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
             <div className="flex justify-between text-sm text-green-600 font-medium pt-2 border-t">
              <span>Rendimientos Totales:</span>
              <span>+${result.totalInterestEarned.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Capital Total Invertido:</span>
              <span>${result.totalPrincipal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
