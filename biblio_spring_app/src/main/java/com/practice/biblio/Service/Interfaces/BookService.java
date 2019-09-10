package com.practice.biblio.Service.Interfaces;

import com.practice.biblio.Entity.Book;

public interface BookService {
    public void save(Book book);
    public byte[] getPic(long id) throws Exception;
}
