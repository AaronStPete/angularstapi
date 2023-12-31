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
import { OrganizationHeader } from './organizationHeader';
import { SpeciesHeader } from './speciesHeader';

/**
 * Base spacecraft class, returned in search results
 */
export interface SpacecraftClassBase { 
    /**
     * Spacecraft class unique ID
     */
    uid: string;
    /**
     * Spacecraft class name
     */
    name: string;
    /**
     * Number of decks
     */
    numberOfDecks?: number;
    /**
     * Whether it's a warp-capable spacecraft class
     */
    warpCapable?: boolean;
    /**
     * Whether this spacecraft class is from alternate reality
     */
    alternateReality?: boolean;
    /**
     * Starting period when this spacecraft class was in use
     */
    activeFrom?: string;
    /**
     * Ending period when this spacecraft class was in use
     */
    activeTo?: string;
    species?: SpeciesHeader;
    owner?: OrganizationHeader;
    operator?: OrganizationHeader;
    affiliation?: OrganizationHeader;
}