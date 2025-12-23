declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export class AnalyticsAdapter {
  trackCalculation(calculatorType: string, result: any) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_used', {
        calculator_type: calculatorType,
        result_value: result.taxAmount || result.totalPayment || result.finalBalance,
        event_category: 'engagement'
      });
    }
  }

  trackAdClick(adSlot: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ad_click', {
        ad_slot: adSlot,
        event_category: 'monetization'
      });
    }
  }
}
