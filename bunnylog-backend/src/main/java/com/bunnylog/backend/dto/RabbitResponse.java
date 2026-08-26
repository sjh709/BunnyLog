package com.bunnylog.backend.dto;

import com.bunnylog.backend.domain.Gender;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record RabbitResponse(
        Long id,
        String imageUrl,
        String name,
        LocalDate birthday,
        Gender gender,
        BigDecimal weight,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
