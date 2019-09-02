package com.example.emprestimo.services;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Risco;
import com.example.emprestimo.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    private ClienteRepository clienteRepository;

    @Autowired
    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public Cliente saverOrUpdateCliente(Cliente cliente){

        cliente.setRisco(gerarRisco(cliente.getRendimentoMensal()));

        clienteRepository.save(cliente);

        return cliente;
    }

    public Risco gerarRisco(Double rendimentoMensal) {
        if(rendimentoMensal <= 2000d)
            return Risco.C;
        else if(rendimentoMensal <= 8000d)
            return Risco.B;
        else if(rendimentoMensal > 8000d)
           return Risco.A;
        else
            throw new RuntimeException("Rendimento mensal inválido!");
    }

    public Iterable<Cliente> findAllClientes() { return clienteRepository.findAll();}

    public Cliente findClienteById(Long id){
        Cliente cliente = clienteRepository.findClienteById(id);

        return cliente;
    }

    public void deleteCliente(Long id){
        Cliente cliente = clienteRepository.findClienteById(id);

        clienteRepository.delete(cliente);
    }
}
