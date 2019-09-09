package com.practice.biblio.Dao;

import com.practice.biblio.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Long> {
    public Student findByEmail(String email);
}
