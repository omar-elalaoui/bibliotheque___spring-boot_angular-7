package com.practice.biblio.Service.Interfaces;

import com.practice.biblio.Entity.Student;
import org.springframework.web.multipart.MultipartFile;

public interface StudentService {
    public void save(Student student, MultipartFile file) throws Exception;
    public byte[] getPic(long id) throws Exception;
}
