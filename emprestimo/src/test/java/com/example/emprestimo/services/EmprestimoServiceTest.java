package com.example.emprestimo.services;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Emprestimo;
import com.example.emprestimo.domain.Risco;
import com.example.emprestimo.repositories.ClienteRepository;
import com.example.emprestimo.repositories.EmprestimoRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class EmprestimoServiceTest {

    @Mock
    EmprestimoRepository emprestimoRepository;
    @Mock
    ClienteRepository clienteRepository;

    EmprestimoService emprestimoService;

    @Test
    public void whenRiscoEqualsAThenJurosEquals1p9(){
        Double actualJuros = emprestimoService.buscarJuros(Risco.A);

        assertEquals(new Double(1.9), actualJuros);
    }

    @Test
    public void whenRiscoEqualsBThenJurosEquals5(){
        Double actualJuros = emprestimoService.buscarJuros(Risco.B);

        assertEquals(new Double(5), actualJuros);
    }

    @Test
    public void whenRiscoEqualsCThenJurosEquals10(){
        Double actualJuros = emprestimoService.buscarJuros(Risco.C);

        assertEquals(new Double(10), actualJuros);
    }

    @Test(expected = RuntimeException.class)
    public void whenRiscoEqualsNullThenThrowException(){
        Double actualJuros = emprestimoService.buscarJuros(null);
    }

    @Test
    public void whenValorContratoEquals1000AndJurosEquals1p9AndPrazoEquals12ThenValorTotalEquals1253p4014941522253(){
        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setValorContratado(1000d);
        emprestimo.setJuros(1.9);
        emprestimo.setPrazo(12);

        Double actualValorTotal = emprestimoService.calcularValorTotal(emprestimo);

        assertEquals(new Double(1253.4014941522253), actualValorTotal);
    }

    @Test
    public void whenClienteHasRiscoEqualsAAndValorContratoEquals1000AndPrazoEquals12ThenValorTotalEquals1253p4014941522253(){
        Emprestimo emprestimo = new Emprestimo();
        emprestimo.setValorContratado(1000d);
        emprestimo.setPrazo(12);

        Cliente cliente = new Cliente();
        cliente.setRisco(Risco.A);

        when(clienteRepository.findClienteById(new Long(1))).thenReturn(cliente);

        emprestimo = emprestimoService.simularEmprestimo(new Long(1), emprestimo);

        assertEquals(new Double(1253.4014941522253), emprestimo.getValorTotal());
        assertEquals(new Double(1.9), emprestimo.getJuros());
        verify(emprestimoRepository).save(emprestimo);
    }



    @Before
    public void setup(){
        emprestimoService = new EmprestimoService(emprestimoRepository, clienteRepository);
    }

}