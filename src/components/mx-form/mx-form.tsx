import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mx-form',
  styleUrl: 'mx-form.scss',
  shadow: true,
})
export class MxForm {
  @Prop() name: string;

  render() {
    return (
      <Host class="mx-form">
        <form id={this.name}>
          <slot></slot>
        </form>
      </Host>
    );
  }

}
