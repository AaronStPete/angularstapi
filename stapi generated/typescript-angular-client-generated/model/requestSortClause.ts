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
import { RequestSortDirection } from './requestSortDirection';

/**
 * Single request sort clause
 */
export interface RequestSortClause { 
    /**
     * Field name results are sorted by
     */
    name: string;
    direction: RequestSortDirection;
    /**
     * Order in which this clause was applied
     */
    clauseOrder: number;
}