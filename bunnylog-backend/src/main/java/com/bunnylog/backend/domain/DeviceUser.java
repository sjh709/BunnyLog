package com.bunnylog.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "device_user")
@Getter
@NoArgsConstructor
public class DeviceUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String deviceId;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    public DeviceUser(String deviceId) {
        this.deviceId = deviceId;
        this.createdAt = LocalDateTime.now();
    }
}
