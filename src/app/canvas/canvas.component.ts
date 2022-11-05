import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  gridSize = 64;


  @ViewChild('grid')
  grid!: ElementRef;
  constructor (private renderer: Renderer2){
  }

  createGrid() {
    if (this.gridSize <= 100 && this.gridSize >= 0) {
    this.removeElements();
    let squares = this.gridSize * this.gridSize;
    for (let i = 0; i < squares; i++) {
      this.addElement();
    }
    }
    else {
      alert("You have entered an invalid input! Please enter a number between 1-100!");
    }

  }

  ngOnInit(): void {
  }

  ngAfterViewInit()  {
 this.createGrid();
  }

  addElement() {
    const cell: HTMLDivElement = this.renderer.createElement('cell');
    this.renderer.setStyle(this.grid.nativeElement, "gridTemplateColumns",`repeat(${this.gridSize}, 1fr` )
    this.renderer.setStyle(this.grid.nativeElement, "gridTemplateColumns",`repeat(${this.gridSize}, 1fr` )

    this.renderer.addClass(cell, "cell");
    this.renderer.appendChild(this.grid.nativeElement, cell);

  }

  removeElements() {
    const childElements = this.grid.nativeElement.childNodes;
    for (let child of childElements) {
      this.renderer.removeChild(this.grid.nativeElement, child);
    }

  }

}
