import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div class="progress-bar-container" [style.backgroundColor]="backgroundColor">
      <div class="progress" [style]="{ backgroundColor: progressColor, width: progress + '%' }"></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})
export class StyleBindingComponent implements OnInit, OnChanges {
  // với từ khóa @Input(), biến này sẽ được tương tác từ bên ngoài
  // với cách này chúng ta có thể chỉ sử dụng progress-bar để hiển thị, còn sự thay đổi giá trị của các biến khi sử dụng progress-bar ở chỗ 
  // khác sẽ được parent component của nó xử lý độc lập
  // Input Binding (Data Down): parent component interact with child component
  @Input() set progress(val: number) {
    // example can handle validation
    // ...
    this._progress = val;
  };
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  // internal
  @Input() backgroundColor = '#CCC';
  // external
  @Input('progress-color') progressColor = 'tomato';

  constructor() {
    console.log('contructor', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });
  }
  
  ngOnInit(): void {
    console.log('init', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', { progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor });
  }
}
