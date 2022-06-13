import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
        // it('Saque o saldo diminui', () => {
        //     const valores = {
        //         transacao: 'saque',
        //         valor: 50,
        //     };
        //     const novoSaldo = calcularNovoSaldo(valores, 150);
        //     expect(novoSaldo).toBe(100);
        // });
        it('Clique no botão Saque o saldo diminui', () => {
            render(<App />);

            const saldo = screen.getByText('R$ 1000');
            const transacao = screen.getByLabelText('Saque');
            const valor = screen.getByTestId('valor');
            const botaoOperacao = screen.getByText('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000');

            fireEvent.click(transacao, { target: { value: 'saque' } });
            fireEvent.change(valor, { target: { value: 10 } });
            fireEvent.click(botaoOperacao);

            expect(saldo.textContent).toBe('R$ 990');
        });
    });
});
