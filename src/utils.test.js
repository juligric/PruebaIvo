import { describe, it, expect } from 'vitest';
import { calcularTotal, aplicarDescuento } from './utils.js';

describe('calcularTotal', () => {
  it('multiplica precio por cantidad', () => {
    expect(calcularTotal(100, 3)).toBe(300);
  });
});

describe('aplicarDescuento', () => {
  it('aplica un 20% de descuento correctamente', () => {
    expect(aplicarDescuento(100, 20)).toBe(80);
  });
});