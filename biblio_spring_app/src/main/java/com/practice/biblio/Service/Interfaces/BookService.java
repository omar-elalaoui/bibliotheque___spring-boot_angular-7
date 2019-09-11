package com.practice.biblio.Service.Interfaces;

import com.practice.biblio.Entity.Book;
import org.springframework.web.multipart.MultipartFile;

public interface BookService {
    public void save(Book book, MultipartFile file) throws Exception;
    public byte[] getPic(long id) throws Exception;
}
