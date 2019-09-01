package com.example.emprestimo.services;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Emprestimo;
import com.example.emprestimo.domain.Risco;
import com.example.emprestimo.repositories.ClienteRepository;
import com.example.emprestimo.repositories.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmprestimoService {

    EmprestimoRepository emprestimoRepository;
    ClienteRepository clienteRepository;

    @Autowired
    public EmprestimoService(EmprestimoRepository emprestimoRepository, ClienteRepository clienteRepository) {
        this.emprestimoRepository = emprestimoRepository;
        this.clienteRepository = clienteRepository;
    }

    public Emprestimo simularEmprestimo(Long clienteId, Emprestimo emprestimo){

        Cliente cliente = clienteRepository.findClienteById(clienteId);
        emprestimo.setCliente(cliente);
        emprestimo.setJuros(buscarJuros(cliente.getRisco()));
        emprestimo.setValorTotal(calcularValorTotal(emprestimo));

        emprestimoRepository.save(emprestimo);

        return emprestimo;
    }

    public Double calcularValorTotal(Emprestimo emprestimo) {
        // Calculo do juros composto: M = C x (1 + i)^t - M = Montante, C = Valor inicial, i = juros, t = prazo
        return emprestimo.getValorContratado() * Math.pow((1 + (emprestimo.getJuros()/100)), emprestimo.getPrazo());
    }

    public Double buscarJuros(Risco risco) {
        // Seta o juros do emprestimo baseado no risco do cliente.
        if(risco.equals(Risco.A))
            return 1.9;
        else if(risco.equals(Risco.B))
            return 5d;
        else if(risco.equals(Risco.C))
            return 10d;
        else
            throw new RuntimeException("Risco inválido!");
    }
}
