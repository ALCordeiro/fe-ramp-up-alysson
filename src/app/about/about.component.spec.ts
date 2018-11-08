import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';
import { SocialBarComponent } from './../shared/social-bar/social-bar.component';
import { AgeTransformPipe } from './../shared/pipes/age-transform.pipe';
import { InformationsService } from 'src/app/core/services/informations/informations.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent,
        SocialBarComponent,
        AgeTransformPipe
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [InformationsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
