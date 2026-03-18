package com.nocountry.videoconverter.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Objeto de Transferencia de Datos (DTO) que estandariza la estructura de las respuestas de error de la API.
 * <p>
 * Este objeto se devuelve al cliente siempre que ocurre una excepción controlada o no controlada,
 * proporcionando detalles sobre qué salió mal, dónde y cuándo.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Respuesta estándar de error de la API")
public class ErrorDto {

    @Schema(description = "Fecha y hora en que ocurrió el error", example = "2026-03-18T04:20:00")
    private LocalDateTime timeStamp;

    @Schema(description = "Código de estado HTTP", example = "404")
    private int status;

    @Schema(description = "Ruta del recurso donde ocurrió el error", example = "/api/conversions/abc123")
    private String path;

    @Schema(description = "Mensaje descriptivo del error", example = "Job de conversión no encontrado con ID: abc123")
    private String message;
}
