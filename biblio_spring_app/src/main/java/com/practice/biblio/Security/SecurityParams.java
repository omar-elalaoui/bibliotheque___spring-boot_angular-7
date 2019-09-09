package com.practice.biblio.Security;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="omar.elalaoui.97@gmail.com";
    public static final long EXPIRATION=100*24*3600;
    public static final String HEADER_PREFIX="Bearer ";
}
