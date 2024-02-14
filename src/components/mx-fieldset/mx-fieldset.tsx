import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mx-fieldset',
  styleUrl: 'mx-fieldset.scss',
  scoped: true,
})
export class MxFieldset {
  @Prop() fieldsetId:string;
  @Prop() name:string;
  
  render() {
    return (
      <Host class="mx-fieldset">
        <fieldset id={this.fieldsetId}>
        <legend>{this.name}</legend>
        <slot></slot>
        </fieldset>
      </Host>
    );
  }

}
