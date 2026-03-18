package com.nocountry.videoconverter.dto;

import com.nocountry.videoconverter.entities.JobStatus;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Respuesta con el estado y resultado de un job de conversión de video")
public class ConversionJobDto {

    @Schema(description = "ID único del job (UUID)", example = "550e8400-e29b-41d4-a716-446655440000")
    private String id;

    @Schema(description = "URL del video convertido a formato vertical. Vacío si aún no está listo.",
            example = "/out/550e8400-e29b-41d4-a716-446655440000.mp4")
    private String outputUrl;

    @Schema(description = "Estado actual del job de conversión", example = "COMPLETED")
    private JobStatus status;
}
