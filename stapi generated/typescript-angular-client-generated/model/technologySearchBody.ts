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

export interface TechnologySearchBody { 
    /**
     * Technology name
     */
    name?: string;
    /**
     * Whether it should be a Borg technology
     */
    borgTechnology?: boolean;
    /**
     * Whether it should be a Borg component
     */
    borgComponent?: boolean;
    /**
     * Whether it should be a communications technology
     */
    communicationsTechnology?: boolean;
    /**
     * Whether it should be a computer technology
     */
    computerTechnology?: boolean;
    /**
     * Whether it should be a technology related to computer programming
     */
    computerProgramming?: boolean;
    /**
     * Whether it should be a subroutine
     */
    subroutine?: boolean;
    /**
     * Whether it should be a database
     */
    database?: boolean;
    /**
     * Whether it should be a energy technology
     */
    energyTechnology?: boolean;
    /**
     * Whether it should be a fictional technology
     */
    fictionalTechnology?: boolean;
    /**
     * Whether it should be a holographic technology
     */
    holographicTechnology?: boolean;
    /**
     * Whether it should be a identification technology
     */
    identificationTechnology?: boolean;
    /**
     * Whether it should be a life support technology
     */
    lifeSupportTechnology?: boolean;
    /**
     * Whether it should be a sensor technology
     */
    sensorTechnology?: boolean;
    /**
     * Whether it should be a shield technology
     */
    shieldTechnology?: boolean;
    /**
     * Whether it should be a tool
     */
    tool?: boolean;
    /**
     * Whether it should be a culinary tool
     */
    culinaryTool?: boolean;
    /**
     * Whether it should be a engineering tool
     */
    engineeringTool?: boolean;
    /**
     * Whether it should be a household tool
     */
    householdTool?: boolean;
    /**
     * Whether it should be a medical equipment
     */
    medicalEquipment?: boolean;
    /**
     * Whether it's a transporter technology
     */
    transporterTechnology?: boolean;
}