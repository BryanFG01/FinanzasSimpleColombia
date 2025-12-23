export interface CalculationRepository {
  save(calculation: any): Promise<void>;
  getAll(type: string): Promise<any[]>;
}
