package com.practice.biblio.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Emprunt {
    @Id
    @GeneratedValue
    private long id;
    @CreatedDate
    private Date date_emprunt;
    private int duree_emprunt;
    private boolean isReturned;
    @ManyToOne
    private Book book;
    @ManyToOne
    private Student student;
}
