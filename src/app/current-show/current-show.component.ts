import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
   current: ICurrentShow
  constructor() { 
    this.current = {
      showname:'The Powerpuff Girls',
      country:'US',
      averagerating:6.1,
      language:'English',
      status:'Running',
      summary:'The city of Townsville may be a beautiful, bustling metropolis, but do not be fooled! There is evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a whose who of evil, they show what it really means to',
      image:''
    } as ICurrentShow
  }

  ngOnInit(): void {
  }

}
