import { describe, it, expect } from 'vitest';
import { calcularTotal } from './utils.js';

describe('calcularTotal', () => {
  it('multiplica precio por cantidad', () => {
    expect(calcularTotal(100, 3)).toBe(300);
  });
});