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
 * Full medical condition, returned when queried using UID
 */
export interface MedicalConditionFull { 
    /**
     * Medical condition unique ID
     */
    uid: string;
    /**
     * Medical condition name
     */
    name: string;
    /**
     * Whether it's a psychological condition
     */
    psychologicalCondition?: boolean;
}