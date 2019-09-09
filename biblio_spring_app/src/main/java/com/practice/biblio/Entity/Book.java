package com.practice.biblio.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Book {
    @Id @GeneratedValue
    private long id;
    private String titre;
    private String auteur;
    private int edition;
    private int pages;
    private long isbn;
    private String photo;
    @ManyToOne
    private Category category;
}
