import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";


describe('Testing VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement:DebugElement
  let htmlElement:HTMLElement
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'))
    htmlElement = debugElement.nativeElement




  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  


  

  it("should display totalVotes increased by one on screen after upVote", ()=>{
    component.upVote()
    fixture.detectChanges()
    //assert that value on screen is 1
    expect(htmlElement.textContent).toBe("Votes: 1 ")

  })

  
  it("should display totalVotes decreased by one on screen after downVote", ()=>{
    component.totalVotes=9
    component.downVote()
    fixture.detectChanges()
    //assert that value on screen is 8
    expect(htmlElement.textContent).toBe("Votes: 8 ")

  })




});
