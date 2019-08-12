package org.zerock.back.repository;

import org.springframework.data.repository.CrudRepository;
import org.zerock.back.domain.Todo;

public interface TodoRepository extends CrudRepository<Todo,Long>{
    
}