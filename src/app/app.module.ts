import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';
import { Day9Component } from './day9/day9.component';
import { Day10Component } from './day10/day10.component';
import { Day11Component } from './day11/day11.component';

@NgModule({
  declarations: [
    AppComponent,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
