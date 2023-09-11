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
import { RequestSort } from './requestSort';

/**
 * Animal search criteria
 */
export interface OrganizationSearchCriteria { 
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Organization name
     */
    name?: string;
    /**
     * Whether it should be a government
     */
    government?: boolean;
    /**
     * Whether it should be an intergovernmental organization
     */
    intergovernmentalOrganization?: boolean;
    /**
     * Whether it should be a research organization
     */
    researchOrganization?: boolean;
    /**
     * Whether it should be a sport organization
     */
    sportOrganization?: boolean;
    /**
     * Whether it should be a medical organization
     */
    medicalOrganization?: boolean;
    /**
     * Whether it should be a military organization
     */
    militaryOrganization?: boolean;
    /**
     * Whether it should be a military unit
     */
    militaryUnit?: boolean;
    /**
     * Whether it should be a government agency
     */
    governmentAgency?: boolean;
    /**
     * Whether it should be a law enforcement agency
     */
    lawEnforcementAgency?: boolean;
    /**
     * Whether it should be a prison or penal colony
     */
    prisonOrPenalColony?: boolean;
    /**
     * Whether this organization should be from mirror universe
     */
    mirror?: boolean;
    /**
     * Whether this organization should be from alternate reality
     */
    alternateReality?: boolean;
}