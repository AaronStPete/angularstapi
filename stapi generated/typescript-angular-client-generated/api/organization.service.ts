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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { OrganizationBaseResponse } from '../model/organizationBaseResponse';
import { OrganizationFullResponse } from '../model/organizationFullResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class OrganizationService {

    protected basePath = 'https://stapi.co/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Retrieval of a single organization
     * @param uid Organization unique ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1GetOrganization(uid: string, observe?: 'body', reportProgress?: boolean): Observable<OrganizationFullResponse>;
    public v1GetOrganization(uid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationFullResponse>>;
    public v1GetOrganization(uid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationFullResponse>>;
    public v1GetOrganization(uid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (uid === null || uid === undefined) {
            throw new Error('Required parameter uid was null or undefined when calling v1GetOrganization.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (uid !== undefined && uid !== null) {
            queryParameters = queryParameters.set('uid', <any>uid);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<OrganizationFullResponse>('get',`${this.basePath}/v1/rest/organization`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Pagination over organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1PageOrganizations(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<OrganizationBaseResponse>;
    public v1PageOrganizations(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationBaseResponse>>;
    public v1PageOrganizations(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationBaseResponse>>;
    public v1PageOrganizations(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<OrganizationBaseResponse>('get',`${this.basePath}/v1/rest/organization/search`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Searching organizations
     * @param name 
     * @param government 
     * @param intergovernmentalOrganization 
     * @param researchOrganization 
     * @param sportOrganization 
     * @param medicalOrganization 
     * @param militaryOrganization 
     * @param militaryUnit 
     * @param governmentAgency 
     * @param lawEnforcementAgency 
     * @param prisonOrPenalColony 
     * @param mirror 
     * @param alternateReality 
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1SearchOrganizationsForm(name?: string, government?: boolean, intergovernmentalOrganization?: boolean, researchOrganization?: boolean, sportOrganization?: boolean, medicalOrganization?: boolean, militaryOrganization?: boolean, militaryUnit?: boolean, governmentAgency?: boolean, lawEnforcementAgency?: boolean, prisonOrPenalColony?: boolean, mirror?: boolean, alternateReality?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<OrganizationBaseResponse>;
    public v1SearchOrganizationsForm(name?: string, government?: boolean, intergovernmentalOrganization?: boolean, researchOrganization?: boolean, sportOrganization?: boolean, medicalOrganization?: boolean, militaryOrganization?: boolean, militaryUnit?: boolean, governmentAgency?: boolean, lawEnforcementAgency?: boolean, prisonOrPenalColony?: boolean, mirror?: boolean, alternateReality?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationBaseResponse>>;
    public v1SearchOrganizationsForm(name?: string, government?: boolean, intergovernmentalOrganization?: boolean, researchOrganization?: boolean, sportOrganization?: boolean, medicalOrganization?: boolean, militaryOrganization?: boolean, militaryUnit?: boolean, governmentAgency?: boolean, lawEnforcementAgency?: boolean, prisonOrPenalColony?: boolean, mirror?: boolean, alternateReality?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationBaseResponse>>;
    public v1SearchOrganizationsForm(name?: string, government?: boolean, intergovernmentalOrganization?: boolean, researchOrganization?: boolean, sportOrganization?: boolean, medicalOrganization?: boolean, militaryOrganization?: boolean, militaryUnit?: boolean, governmentAgency?: boolean, lawEnforcementAgency?: boolean, prisonOrPenalColony?: boolean, mirror?: boolean, alternateReality?: boolean, pageNumber?: number, pageSize?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

















        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (government !== undefined) {
            formParams = formParams.append('government', <any>government) as any || formParams;
        }
        if (intergovernmentalOrganization !== undefined) {
            formParams = formParams.append('intergovernmentalOrganization', <any>intergovernmentalOrganization) as any || formParams;
        }
        if (researchOrganization !== undefined) {
            formParams = formParams.append('researchOrganization', <any>researchOrganization) as any || formParams;
        }
        if (sportOrganization !== undefined) {
            formParams = formParams.append('sportOrganization', <any>sportOrganization) as any || formParams;
        }
        if (medicalOrganization !== undefined) {
            formParams = formParams.append('medicalOrganization', <any>medicalOrganization) as any || formParams;
        }
        if (militaryOrganization !== undefined) {
            formParams = formParams.append('militaryOrganization', <any>militaryOrganization) as any || formParams;
        }
        if (militaryUnit !== undefined) {
            formParams = formParams.append('militaryUnit', <any>militaryUnit) as any || formParams;
        }
        if (governmentAgency !== undefined) {
            formParams = formParams.append('governmentAgency', <any>governmentAgency) as any || formParams;
        }
        if (lawEnforcementAgency !== undefined) {
            formParams = formParams.append('lawEnforcementAgency', <any>lawEnforcementAgency) as any || formParams;
        }
        if (prisonOrPenalColony !== undefined) {
            formParams = formParams.append('prisonOrPenalColony', <any>prisonOrPenalColony) as any || formParams;
        }
        if (mirror !== undefined) {
            formParams = formParams.append('mirror', <any>mirror) as any || formParams;
        }
        if (alternateReality !== undefined) {
            formParams = formParams.append('alternateReality', <any>alternateReality) as any || formParams;
        }

        return this.httpClient.request<OrganizationBaseResponse>('post',`${this.basePath}/v1/rest/organization/search`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}