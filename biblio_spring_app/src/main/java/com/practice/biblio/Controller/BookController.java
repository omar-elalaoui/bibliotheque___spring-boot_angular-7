package com.practice.biblio.Controller;

import com.practice.biblio.Entity.Book;
import com.practice.biblio.Service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
public class BookController {
    @Autowired
    BookServiceImpl bookService;
    
    @PostMapping("/books")
    public void add(@RequestBody Book book){
        bookService.save(book);
    }
    
    @PutMapping("/books")
    public void update(@RequestBody Book book){
        bookService.save(book);
    }
    
    @GetMapping(path = "/books/getPic/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getPic(@PathVariable("id") Long id) throws Exception{
        return bookService.getPic(id);
    }
    
}
