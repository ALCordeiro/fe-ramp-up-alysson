import { TestBed, async } from '@angular/core/testing';
import { AgeTransformPipe } from './age-transform.pipe';

describe('AgeTransformPipe', () => {

  let pipe: AgeTransformPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AgeTransformPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    pipe = TestBed.get(AgeTransformPipe);
  });

  it('transform date in age', () => {
    expect(pipe.transform('1996-08-30T03:00:00.000Z')).toBe('22');
  });

  it('create an instance', () => {
    const pipe = new AgeTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
