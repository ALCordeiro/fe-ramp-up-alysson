import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginService } from './../core/services/login/login.service';
import { LoginComponent } from './login.component';
import { User } from './user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let user: User;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [LoginService, User]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LoginService);
    user = TestBed.get(User);
    fixture.detectChanges();
  });
  
  it('when method makeLogin() is called',() => {
    spyOn(component, 'makeLogin').and.callThrough();
    spyOn(service, 'makeLogin');

    el = fixture.debugElement.query(By.css('.button'));
    el.triggerEventHandler('click', null);

    expect(component.makeLogin).toHaveBeenCalled();
    expect(service.makeLogin).toHaveBeenCalledWith(user);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
