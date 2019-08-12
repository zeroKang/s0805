package org.zerock.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.zerock.demo.domain.Todo;
import org.zerock.demo.repositories.TodoRepository;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping("/todo")
@AllArgsConstructor
public class TodoController {

    private TodoRepository repo;

    @PostMapping("/new")
    public String addTodo(@RequestBody Todo todo ){
        System.out.println("add To do...." + todo);
        return "success";
    }

}