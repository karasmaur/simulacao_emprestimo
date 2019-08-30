package com.example.emprestimo.web;

import com.example.emprestimo.domain.Cliente;
import com.example.emprestimo.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<?> createNewCliente(@Valid @RequestBody Cliente cliente, BindingResult result){
        Cliente returnCliente = clienteService.saverOrUpdateCliente(cliente);

        return new ResponseEntity<Cliente>(returnCliente, HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<Iterable<Cliente>> getAllClientes(){

        Iterable<Cliente> clientes = clienteService.findAllClientes();

        return new ResponseEntity<Iterable<Cliente>>(clientes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getCliente(@PathVariable Long id){
        Cliente cliente = clienteService.findClienteById(id);

        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCliente(@PathVariable Long id){
        clienteService.deleteCliente(id);

        return new ResponseEntity<String>("Cliente com ID: "+id+" foi deletado!", HttpStatus.OK);
    }

}
