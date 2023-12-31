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
 * Full weapon, returned when queried using UID
 */
export interface WeaponFull { 
    /**
     * Weapon unique ID
     */
    uid: string;
    /**
     * Weapon name
     */
    name: string;
    /**
     * Whether it's a hand-help weapon
     */
    handHeldWeapon?: boolean;
    /**
     * Whether it's a laser technology
     */
    laserTechnology?: boolean;
    /**
     * Whether it's a plasma technology
     */
    plasmaTechnology?: boolean;
    /**
     * Whether it's a photonic technology
     */
    photonicTechnology?: boolean;
    /**
     * Whether it's a phaser technology
     */
    phaserTechnology?: boolean;
    /**
     * Whether this weapon is from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this weapon is from alternate reality
     */
    alternateReality?: boolean;
}