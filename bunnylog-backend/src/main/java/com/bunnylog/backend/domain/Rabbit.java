package com.bunnylog.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "rabbit")
@Getter
@NoArgsConstructor
public class Rabbit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;

    private String name;

    private LocalDate birthday;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private BigDecimal weight;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private DeviceUser deviceUser;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    public Rabbit(String imageUrl, String name, LocalDate birthday, Gender gender, BigDecimal weight, DeviceUser deviceUser) {
        this.imageUrl = imageUrl;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.weight = weight;
        this.deviceUser = deviceUser;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
