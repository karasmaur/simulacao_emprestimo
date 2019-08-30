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

    @Autowired
    EmprestimoRepository emprestimoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    public Emprestimo saverOrUpdateEmprestimo(Long clienteId, Emprestimo emprestimo){

        Cliente cliente = clienteRepository.findClienteById(clienteId);
        emprestimo.setCliente(cliente);

        // Seta o juros do emprestimo baseado no risco do cliente.
        if(cliente.getRisco().equals(Risco.A))
            emprestimo.setJuros(1.9);
        else if(cliente.getRisco().equals(Risco.B))
            emprestimo.setJuros(5);
        else
            emprestimo.setJuros(10);

        // Calculo do juros composto: M = C x (1 + i)^t - M = Montante, C = Valor inicial, i = juros, t = prazo
        emprestimo.setValorTotal(emprestimo.getValorContratado() * Math.pow((1 + (emprestimo.getJuros()/100)), emprestimo.getPrazo()));

        return emprestimoRepository.save(emprestimo);
    }


}
