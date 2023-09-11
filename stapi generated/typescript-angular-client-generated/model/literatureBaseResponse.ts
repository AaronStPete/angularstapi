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
import { LiteratureBase } from './literatureBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for literature search
 */
export interface LiteratureBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of literature matching given criteria
     */
    literature?: Array<LiteratureBase>;
}