package com.example.emprestimo.repositories;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.domain.Emprestimo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmprestimoRepository extends CrudRepository<Emprestimo, Long> {

    Iterable<Emprestimo> findEmprestimosByCliente(Cliente cliente);

    Emprestimo findEmprestimoById(Long id);
}
