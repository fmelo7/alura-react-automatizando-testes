import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('Componente Principal', () => {
    describe('Quando abro o app do banco', () => {
        it('Mostra o nome do banco', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
        it('Mostra o saldo', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
        it('Mostra o botão realizar operação', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });
    });
    describe('Quando realizo uma operação', () => {
        it('Saque o saldo diminui', () => {
            const valores = {
                transacao: 'saque',
                valor: 50,
            };
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        });
    });
});
