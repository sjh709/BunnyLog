package com.bunnylog.backend.controller;

import com.bunnylog.backend.domain.Rabbit;
import com.bunnylog.backend.dto.RabbitRequest;
import com.bunnylog.backend.dto.RabbitResponse;
import com.bunnylog.backend.service.RabbitService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:5173")
@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class RabbitController {

    private final RabbitService rabbitService;

    @PostMapping("/api/rabbits")
    public Rabbit createRabbit(
            @Valid @RequestBody RabbitRequest request
    ) {
        return rabbitService.createRabbit(
                request.deviceId(),
                request.imageUrl(),
                request.name(),
                request.birthday(),
                request.gender(),
                request.weight()
        );
    }

    @GetMapping("/api/rabbits")
    public List<RabbitResponse> getRabbits(
            @RequestParam String deviceId
    ) {
        return rabbitService.getRabbits(deviceId);
    }

    @GetMapping("/api/rabbits/{rabbitId}")
    public RabbitResponse getRabbit(@PathVariable Long rabbitId) {
        return rabbitService.getRabbit(rabbitId);
    }
}
