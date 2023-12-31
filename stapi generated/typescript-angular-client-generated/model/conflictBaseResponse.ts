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
import { ConflictBase } from './conflictBase';
import { ResponsePage } from './responsePage';
import { ResponseSort } from './responseSort';

/**
 * Response object for conflicts search
 */
export interface ConflictBaseResponse { 
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of conflicts matching given criteria
     */
    conflicts?: Array<ConflictBase>;
}