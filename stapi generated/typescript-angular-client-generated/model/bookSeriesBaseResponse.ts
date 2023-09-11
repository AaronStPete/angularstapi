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
import { BookSeriesBase } from './bookSeriesBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for book series search
 */
export interface BookSeriesBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of book series matching given criteria
     */
    bookSeries?: Array<BookSeriesBase>;
}