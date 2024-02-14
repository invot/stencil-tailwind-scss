import { Component, Host, State, Prop, Event, EventEmitter, h } from '@stencil/core';

interface inputValueType {
  value: string,
  isValid: boolean
}

@Component({
  tag: 'mx-input',
  styleUrl: 'mx-input.scss',
  scoped: true,
})
export class MxInput {
  
  @State() mxInputValue: inputValueType = {value: '', isValid: false};
  @Prop() value: string = this.mxInputValue.value;
  @Prop() mxInputId: string;
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() inputClass: string;
  @Prop() type: string = "text";
  @Prop() maxLength: number;
  @Prop() disabled: boolean;
  @Prop() required: boolean;

  @Event() mxInput: EventEmitter<InputEvent>;
  @Event() mxFocus: EventEmitter<FocusEvent>;
  @Event() mxClick: EventEmitter<MouseEvent>;
  @Event() mxBlur: EventEmitter<FocusEvent>;

  render() {
    return (
      <Host class="mx-input">
          <label htmlFor={this.mxInputId}>{this.label}</label>
          <input 
            class={this.inputClass}
            type={this.type}
            id={this.mxInputId}
            placeholder={this.placeholder} 
            value={this.value || this.mxInputValue.value} 
            maxlength ={this.maxLength} 
            disabled={this.disabled}
            required={this.required}
            onInput={(e)=>this.mxInput.emit(e)}
            onFocus={(e)=>this.mxFocus.emit(e)}
            onClick={(e)=>this.mxClick.emit(e)}
            onBlur={(e)=>this.mxBlur.emit(e)}
          />
      </Host>
    );
  }

}
