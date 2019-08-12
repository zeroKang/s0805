package org.zerock.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.zerock.demo.domain.Todo;



public interface TodoRepository extends CrudRepository<Todo, Long>{

}