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
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';
import { SpeciesBase } from './speciesBase';

/**
 * Response object for species search
 */
export interface SpeciesBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of species matching given criteria
     */
    species?: Array<SpeciesBase>;
}