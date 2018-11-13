import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InformationsService } from './informations.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

describe('GetInformations', () => {
    let service: InformationsService;
    let httpMock: HttpTestingController;

    let destroyed$: Subject<void>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [InformationsService]
        });
        service = TestBed.get(InformationsService);
        httpMock = TestBed.get(HttpTestingController);

        destroyed$ = new Subject();
    });

    afterEach(() => {
        httpMock.verify();

        destroyed$.next();
        destroyed$.complete();
    });

    it('should return an Observable<Informations>', () => {
      const dummyInformations = [{
        address: "24058, Belgium, Brussels, Liutte 27, BE",
        dateOfBirth: "1996-08-30T03:00:00.000Z",
        email: "robertsmith@company.com",
        freelance: "till April 15, 2018",
        latitude: -22.9246802,
        longitude: -47.0825035,
        name: "Robert Smith",
        phone: "+1 256 254 84 56",
        position: "Developer and Startup entrepeneur",
        skype: "robsmithcompany",
        vacation: "till April 15, 2018",
        viber: "+1 256 254 84 56"
      }];
  
      service.informations$().pipe(takeUntil(destroyed$)).subscribe(informations => {
        expect(informations).toEqual(dummyInformations);
      });
  
      const req = httpMock.expectOne(service.API);
      expect(req.request.method).toBe("GET");
      req.flush(dummyInformations);
    });
});