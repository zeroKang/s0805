package org.zerock.back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.back.repository.TodoRepository;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/todo/")
@AllArgsConstructor

public class TodoController  {

    private TodoRepository repo;

    @GetMapping(value="/new")
    public String add(){
        System.out.println("add................");
        return "success";
    }
    
}