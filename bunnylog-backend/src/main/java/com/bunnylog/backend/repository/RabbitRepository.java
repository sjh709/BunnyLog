package com.bunnylog.backend.repository;

import com.bunnylog.backend.domain.Rabbit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RabbitRepository extends JpaRepository<Rabbit, Long> {

    // deviceId 확인 -> 해당 사용자의 Rabbit 조회
    List<Rabbit> findByDeviceUserDeviceId(String deviceId);
}
