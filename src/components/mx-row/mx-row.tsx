import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mx-row',
  styleUrl: 'mx-row.scss',
  shadow: true,
})
export class MxRow {

  render() {
    return (
      <Host class="flex flex-row">
        <slot></slot>
      </Host>
    );
  }

}
