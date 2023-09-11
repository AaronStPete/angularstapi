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
import { ContentRatingSystem } from './contentRatingSystem';

/**
 * Rating of video release, etc.
 */
export interface ContentRating { 
    /**
     * Rating unique ID
     */
    uid?: string;
    contentRatingSystem?: ContentRatingSystem;
    /**
     * Rating within specified content rating system
     */
    rating?: string;
}