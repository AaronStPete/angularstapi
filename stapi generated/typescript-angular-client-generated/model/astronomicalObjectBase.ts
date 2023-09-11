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
import { AstronomicalObjectHeader } from './astronomicalObjectHeader';
import { AstronomicalObjectType } from './astronomicalObjectType';

/**
 * Base astronomical object, returned in search results
 */
export interface AstronomicalObjectBase { 
    /**
     * Astronomical object's unique ID
     */
    uid: string;
    /**
     * Astronomical object name
     */
    name: string;
    astronomicalObjectType: AstronomicalObjectType;
    location?: AstronomicalObjectHeader;
}