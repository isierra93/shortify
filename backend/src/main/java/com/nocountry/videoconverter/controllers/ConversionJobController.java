package com.nocountry.videoconverter.controllers;

import com.nocountry.videoconverter.dto.ConversionJobDto;
import com.nocountry.videoconverter.dto.ErrorDto;
import com.nocountry.videoconverter.entities.ConversionJob;
import com.nocountry.videoconverter.mappers.ConversionJobMapper;
import com.nocountry.videoconverter.services.ConversionJobService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/conversions")
@Tag(name = "Conversions", description = "Operaciones para subir videos y consultar el estado de las conversiones")
public class ConversionJobController {

    private final ConversionJobService conversionJobService;
    private final ConversionJobMapper conversionJobMapper;

    private static final Logger logger = LoggerFactory.getLogger(ConversionJobController.class);

    @Operation(
            summary = "Subir un video para conversión",
            description = "Sube un archivo de video para convertirlo a formato vertical (9:16). "
                    + "Opcionalmente se puede especificar un segmento del video mediante startTime y endTime "
                    + "en formato HH:mm:ss o segundos."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Video subido exitosamente y job de conversión creado",
                    content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ConversionJob.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Archivo vacío o formato inválido",
                    content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ErrorDto.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "500",
                    description = "Error interno del servidor",
                    content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ErrorDto.class)
                    )
            )
    })
    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadVideo(
            @Parameter(description = "Archivo de video a convertir", required = true)
            @RequestParam("file") MultipartFile file,

            @Parameter(description = "Tiempo de inicio del segmento (formato HH:mm:ss o segundos)", example = "00:00:10")
            @RequestParam(required = false) String startTime,

            @Parameter(description = "Tiempo de fin del segmento (formato HH:mm:ss o segundos)", example = "00:01:30")
            @RequestParam(required = false) String endTime) {

        logger.info("Solicitud recibida para subir video: {}", file.getOriginalFilename());

        if (startTime != null || endTime != null) {
            logger.info("Segmento solicitado - startTime: {}, endTime: {}", startTime, endTime);
        }

        try {
            ConversionJob video = conversionJobService.createJob(file, startTime, endTime);

            logger.info("Job creado exitosamente con ID: {}", video.getId());

            return ResponseEntity.ok(video);

        } catch (Exception e) {
            logger.error("Error al crear job de conversión para archivo: {}",
                    file.getOriginalFilename(), e);
            throw e; // dejamos que el handler global lo maneje
        }
    }

    @Operation(
            summary = "Consultar estado de una conversión",
            description = "Obtiene el estado actual de un job de conversión por su ID (UUID). "
                    + "Devuelve el estado, la URL del video procesado (si está listo) y metadata."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Estado del job de conversión",
                    content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ConversionJobDto.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Job de conversión no encontrado",
                    content = @Content(
                            mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ErrorDto.class)
                    )
            )
    })
    @GetMapping("/{id}")
    public ResponseEntity<ConversionJobDto> getStatus(
            @Parameter(description = "ID único del job de conversión (UUID)", required = true, example = "550e8400-e29b-41d4-a716-446655440000")
            @PathVariable String id) {

        ConversionJob job = conversionJobService.getJob(id);

        logger.debug("Estado actual del job {}: {}", id, job.getStatus());

        ConversionJobDto jobDto = conversionJobMapper.toDto(job);
        return ResponseEntity.ok(jobDto);
    }
}