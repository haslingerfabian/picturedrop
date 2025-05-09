/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SubmissionItem } from '../../models/submission-item';

export interface GetAllSubmissionItems$Params {
}

export function getAllSubmissionItems(http: HttpClient, rootUrl: string, params?: GetAllSubmissionItems$Params, context?: HttpContext): Observable<StrictHttpResponse<SubmissionItem>> {
  const rb = new RequestBuilder(rootUrl, getAllSubmissionItems.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SubmissionItem>;
    })
  );
}

getAllSubmissionItems.PATH = '/api/submissionItems';
