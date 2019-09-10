package com.practice.biblio.Service;

import com.practice.biblio.Dao.BookRepo;
import com.practice.biblio.Entity.Book;
import com.practice.biblio.Service.Interfaces.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class BookServiceImpl implements BookService {
    
    @Value("${dir.books}")
    String booksDir;
    
    @Autowired
    BookRepo bookRepo;
    
    @Override
    public void save(Book book) {
        Book foundBook= bookRepo.findByTitre(book.getTitre());
        if(foundBook != null && foundBook.getEdition() == book.getEdition()) throw new RuntimeException("Livre existe déja");
        bookRepo.save(book);
    }
    
    @Override
    public byte[] getPic(long id) throws Exception{
        Book book= bookRepo.findById(id).get();
        return Files.readAllBytes(Paths.get(booksDir+book.getPhoto()));
    }
    
    
}
