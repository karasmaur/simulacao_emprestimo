package com.example.emprestimo.web;

import com.example.emprestimo.domain.Emprestimo;
import com.example.emprestimo.services.EmprestimoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/emprestimo")
@CrossOrigin
public class EmprestimoController {

    @Autowired
    EmprestimoService emprestimoService;

    @PostMapping("/{clienteId}")
    public ResponseEntity<?> createNewEmprestimo(@Valid @PathVariable Long clienteId, @RequestBody Emprestimo emprestimo, BindingResult result){

        Emprestimo returnEmprestimo = emprestimoService.simularEmprestimo(clienteId, emprestimo);

        return new ResponseEntity<Emprestimo>(returnEmprestimo, HttpStatus.CREATED);
    }
}
