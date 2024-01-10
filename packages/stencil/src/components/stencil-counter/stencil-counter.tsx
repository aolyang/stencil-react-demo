import { Component, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-counter',
  styleUrl: 'stencil-counter.css',
  shadow: true,
})
export class StencilCounter {
  @Prop() count: number = 0;
  @State() countState: number = 0;
  constructor() {
    this.countState = this.count;
  }
  render() {
    return (
      <Host>
          <button onClick={() => this.countState++}>counter {this.countState}</button>
      </Host>
    );
  }

}
