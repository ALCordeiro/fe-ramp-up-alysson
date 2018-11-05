import { ProfessionalSkillsModule } from './professional-skills.module';

describe('ProfessionalSkillsModule', () => {
  let professionalSkillsModule: ProfessionalSkillsModule;

  beforeEach(() => {
    professionalSkillsModule = new ProfessionalSkillsModule();
  });

  it('should create an instance', () => {
    expect(professionalSkillsModule).toBeTruthy();
  });
});
