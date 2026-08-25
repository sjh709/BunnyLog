package com.bunnylog.backend.dto;

import com.bunnylog.backend.domain.Gender;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;

public record RabbitRequest(

        @NotBlank
        String deviceId,

        String imageUrl,

        @NotBlank
        String name,

        @NotNull
        LocalDate birthday,

        @NotNull
        Gender gender,

        @NotNull
        BigDecimal weight
) {
}
