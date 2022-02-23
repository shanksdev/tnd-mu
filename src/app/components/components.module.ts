import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BaseBoardComponent } from "./base-board/base-board.component";

@NgModule({
  imports:[CommonModule],
  declarations:[BaseBoardComponent],
  exports:[BaseBoardComponent]
})
export class ComponentsModule{}