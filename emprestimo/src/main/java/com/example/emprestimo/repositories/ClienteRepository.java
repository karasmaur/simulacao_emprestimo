package com.example.emprestimo.repositories;

import com.example.emprestimo.domain.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {

    @Override
    Iterable<Cliente> findAll();

    Cliente findClienteById(Long id);
}
