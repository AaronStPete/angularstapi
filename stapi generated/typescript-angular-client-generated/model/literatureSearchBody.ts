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

export interface LiteratureSearchBody { 
    /**
     * Literature title
     */
    title?: string;
    /**
     * Whether it should be of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it should be a Shakespearean work
     */
    shakespeareanWork?: boolean;
    /**
     * Whether it should be a report
     */
    report?: boolean;
    /**
     * Whether it should be a scientific literature
     */
    scientificLiterature?: boolean;
    /**
     * Whether it should be a technical manual
     */
    technicalManual?: boolean;
    /**
     * Whether it should be a religious literature
     */
    religiousLiterature?: boolean;
}