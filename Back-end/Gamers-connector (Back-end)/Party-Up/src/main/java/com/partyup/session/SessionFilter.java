package com.partyup.session;

import com.partyup.model.Player;
import com.partyup.service.CustomPlayerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class SessionFilter extends OncePerRequestFilter {

    private final InMemorySessionRegistry sessionRegistry;
    private final CustomPlayerDetailsService playerDetailsService;

    @Autowired
    public SessionFilter(InMemorySessionRegistry sessionRegistry, CustomPlayerDetailsService playerDetailsService) {
        this.sessionRegistry = sessionRegistry;
        this.playerDetailsService = playerDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        final String sessionId = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (sessionId == null || sessionId.length() == 0) {
            // No session ID provided, continue with the filter chain
            filterChain.doFilter(request, response);
            return;
        }
        final String username = sessionRegistry.getUsernameForSession(sessionId);
        if (username == null) {
            // Session ID is invalid or expired, continue with the filter chain
            filterChain.doFilter(request, response);
            return;
        }
        // Session ID is valid, retrieve the player details
        Player player = playerDetailsService.loadUserByUsername(username);
        // Create an authentication token with the player details
        UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(player, null, player.getAuthorities());
        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        // Set the authentication in the security context
        SecurityContextHolder.getContext().setAuthentication(auth);
        // Continue with the filter chain
        filterChain.doFilter(request, response);
    }
}
