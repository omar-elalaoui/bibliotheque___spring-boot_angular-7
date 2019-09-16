package com.practice.biblio.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Demande {
    @Id @GeneratedValue
    private long id;
    private Date date_demande;
    @ManyToOne
    private Book book;
    @ManyToOne
    private Student student;
}
