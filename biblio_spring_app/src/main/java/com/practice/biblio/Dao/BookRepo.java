package com.practice.biblio.Dao;

import com.practice.biblio.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource
public interface BookRepo extends JpaRepository<Book, Long> {
    @RestResource(path = "pagesBetween")
    public List<Book> findByPagesBetween(@Param("a") int a, @Param("b") int b);
}
