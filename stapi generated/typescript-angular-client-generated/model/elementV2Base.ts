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

/**
 * Base element, returned in search results (v2)
 */
export interface ElementV2Base { 
    /**
     * Element unique ID
     */
    uid: string;
    /**
     * Element name
     */
    name: string;
    /**
     * Element symbol
     */
    symbol?: string;
    /**
     * Element atomic number
     */
    atomicNumber?: number;
    /**
     * Element atomic weight
     */
    atomicWeight?: number;
    /**
     * Whether it's a transuranic
     */
    transuranic?: boolean;
    /**
     * Whether it belongs to Gamma series
     */
    gammaSeries?: boolean;
    /**
     * Whether it belongs to Hypersonic series
     */
    hypersonicSeries?: boolean;
    /**
     * Whether it belongs to Mega series
     */
    megaSeries?: boolean;
    /**
     * Whether it belongs to Omega series
     */
    omegaSeries?: boolean;
    /**
     * Whether it belongs to Transonic series
     */
    transonicSeries?: boolean;
    /**
     * Whether it belongs to World series
     */
    worldSeries?: boolean;
}