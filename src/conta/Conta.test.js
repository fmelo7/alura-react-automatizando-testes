import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
    it('Exibir o saldo da conta', () => {
        render(<Conta saldo={1000} />);

        const saldo = screen.getByTestId('saldo-conta');

        expect(saldo.textContent).toBe('R$ 1000');
    });
    it('Chamar a funcao realizar transacao', () => {
        const fnRealizarTransacao = jest.fn();

        render(<Conta saldo={1000} realizarTransacao={fnRealizarTransacao} />);

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(fnRealizarTransacao).toHaveBeenCalled();
    });
});
