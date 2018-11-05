import { SocialBarModule } from './social-bar.module';

describe('SocialBarModule', () => {
  let socialBarModule: SocialBarModule;

  beforeEach(() => {
    socialBarModule = new SocialBarModule();
  });

  it('should create an instance', () => {
    expect(socialBarModule).toBeTruthy();
  });
});
