package com.bunnylog.backend.service;

import com.bunnylog.backend.domain.DeviceUser;
import com.bunnylog.backend.repository.DeviceUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeviceUserService {

    private final DeviceUserRepository deviceUserRepository;

    public DeviceUser findOrCreate(String deviceId) {

        return deviceUserRepository.findByDeviceId(deviceId)
                .orElseGet(() -> {
                    DeviceUser user = new DeviceUser(deviceId);
                    return deviceUserRepository.save(user);
                });
    }
}
