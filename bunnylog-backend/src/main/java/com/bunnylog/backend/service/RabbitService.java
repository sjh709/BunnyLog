package com.bunnylog.backend.service;

import com.bunnylog.backend.domain.DeviceUser;
import com.bunnylog.backend.domain.Gender;
import com.bunnylog.backend.domain.Rabbit;
import com.bunnylog.backend.repository.RabbitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class RabbitService {

    private final DeviceUserService deviceUserService;
    private final RabbitRepository rabbitRepository;

    public Rabbit createRabbit(
            String deviceId,
            String imageUrl,
            String name,
            LocalDate birthday,
            Gender gender,
            BigDecimal weight
    ) {

        DeviceUser deviceUser = deviceUserService.findOrCreate(deviceId);

        Rabbit rabbit = new Rabbit(imageUrl, name, birthday, gender, weight, deviceUser);

        return rabbitRepository.save(rabbit);
    }
}
