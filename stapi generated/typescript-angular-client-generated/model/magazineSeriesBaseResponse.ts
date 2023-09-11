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
import { MagazineSeriesBase } from './magazineSeriesBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for magazine series search
 */
export interface MagazineSeriesBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of magazine series matching given criteria
     */
    magazineSeries?: Array<MagazineSeriesBase>;
}