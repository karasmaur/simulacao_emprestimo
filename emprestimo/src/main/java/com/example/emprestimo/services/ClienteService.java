package com.example.emprestimo.services;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Risco;
import com.example.emprestimo.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente saverOrUpdateCliente(Cliente cliente){

        if(cliente.getRendimentoMensal() <= 2000)
            cliente.setRisco(Risco.C);
        else if(cliente.getRendimentoMensal() <= 8000)
            cliente.setRisco(Risco.B);
        else
            cliente.setRisco(Risco.A);

        return clienteRepository.save(cliente);
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
