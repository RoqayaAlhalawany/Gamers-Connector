package com.partyup.payload;

public class LoginDto {

    private String usernameOrEmail;  // The username or email entered for login
    private String password;  // The password entered for login

    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
