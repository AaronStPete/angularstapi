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
import { AstronomicalObjectHeader } from './astronomicalObjectHeader';

/**
 * Base species, returned in search results
 */
export interface SpeciesBase { 
    /**
     * Species unique ID
     */
    uid: string;
    /**
     * Species name
     */
    name: string;
    homeworld?: AstronomicalObjectHeader;
    quadrant?: AstronomicalObjectHeader;
    /**
     * Whether it's an extinct species
     */
    extinctSpecies?: boolean;
    /**
     * Whether it's a warp-capable species
     */
    warpCapableSpecies?: boolean;
    /**
     * Whether it's an extra-galactic species
     */
    extraGalacticSpecies?: boolean;
    /**
     * Whether it's a humanoid species
     */
    humanoidSpecies?: boolean;
    /**
     * Whether it's a reptilian species
     */
    reptilianSpecies?: boolean;
    /**
     * Whether it's a non-corporeal species
     */
    nonCorporealSpecies?: boolean;
    /**
     * Whether it's a shapeshifting species
     */
    shapeshiftingSpecies?: boolean;
    /**
     * Whether it's a spaceborne species
     */
    spaceborneSpecies?: boolean;
    /**
     * Whether it's a telepathic species
     */
    telepathicSpecies?: boolean;
    /**
     * Whether it's a trans-dimensional species
     */
    transDimensionalSpecies?: boolean;
    /**
     * Whether it's a unnamed species
     */
    unnamedSpecies?: boolean;
    /**
     * Whether this species is from alternate reality
     */
    alternateReality?: boolean;
}