package com.practice.biblio.Dao;

import com.practice.biblio.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface BookRepo extends JpaRepository<Book, Long> {
    public Book findByTitre(String titre);
}
