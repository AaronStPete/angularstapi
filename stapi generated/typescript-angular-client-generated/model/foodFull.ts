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
 * Full food, returned when queried using UID
 */
export interface FoodFull { 
    /**
     * Food unique ID
     */
    uid: string;
    /**
     * Food name
     */
    name: string;
    /**
     * Whether it's of earthly origin
     */
    earthlyOrigin?: boolean;
    /**
     * Whether it's a dessert
     */
    dessert?: boolean;
    /**
     * Whether it's a fruit
     */
    fruit?: boolean;
    /**
     * Whether it's an herb or a spice
     */
    herbOrSpice?: boolean;
    /**
     * Whether it's a sauce
     */
    sauce?: boolean;
    /**
     * Whether it's a soup
     */
    soup?: boolean;
    /**
     * Whether it's a beverage
     */
    beverage?: boolean;
    /**
     * Whether it's an alcoholic beverage
     */
    alcoholicBeverage?: boolean;
    /**
     * Whether it's a juice
     */
    juice?: boolean;
    /**
     * Whether it's a tea
     */
    tea?: boolean;
}