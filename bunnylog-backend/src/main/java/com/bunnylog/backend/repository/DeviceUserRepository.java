package com.bunnylog.backend.repository;

import com.bunnylog.backend.domain.DeviceUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DeviceUserRepository extends JpaRepository<DeviceUser, Long> {

    Optional<DeviceUser> findByDeviceId(String deviceId);
}
