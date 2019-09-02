package com.example.emprestimo.services;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Risco;
import com.example.emprestimo.repositories.ClienteRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.verify;


@RunWith(MockitoJUnitRunner.class)
public class ClienteServiceTest {

    @Mock
    ClienteRepository clienteRepository;

    ClienteService clienteService;

    @Test
    public void whenRendimentoMensalEquals2000ThenRiscoEqualsC(){
        Risco actualRisco = clienteService.gerarRisco(2000d);
        assertEquals(Risco.C, actualRisco);
    }

    @Test
    public void whenRendimentoMensalEquals8000ThenRiscoEqualsB(){
        Risco actualRisco = clienteService.gerarRisco(8000d);
        assertEquals(Risco.B, actualRisco);
    }

    @Test
    public void whenRendimentoMensalEquals9000ThenRiscoEqualsA(){
        Risco actualRisco = clienteService.gerarRisco(9000d);
        assertEquals(Risco.A, actualRisco);
    }

    @Test(expected = RuntimeException.class)
    public void whenRendimentoMensalEqualsNullThenThrowException(){
        Risco actualRisco = clienteService.gerarRisco(null);
    }

    @Test
    public void whenClienteHasRendimentoMensalEquals1000ThenRiscoEqualsC(){
        Cliente cliente = new Cliente();
        cliente.setRendimentoMensal(1000d);

        cliente = clienteService.saverOrUpdateCliente(cliente);

        assertEquals(Risco.C, cliente.getRisco());
        verify(clienteRepository).save(cliente);
    }

    @Before
    public void setup(){
        clienteService = new ClienteService(clienteRepository);
    }

}