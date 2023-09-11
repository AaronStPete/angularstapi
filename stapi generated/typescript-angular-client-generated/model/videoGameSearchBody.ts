/**
 * STAPI
 * STAPI, a Star Trek API
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface VideoGameSearchBody { 
    /**
     * Video game title
     */
    title?: string;
    /**
     * Minimal date the video game was first released
     */
    releaseDateFrom?: string;
    /**
     * Minimal date the video game was first released
     */
    releaseDateTo?: string;
}