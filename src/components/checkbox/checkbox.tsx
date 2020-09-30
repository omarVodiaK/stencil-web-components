import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'seb-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: false,
})
export class Checkbox {
  @Prop() _id?: string;
  @Prop() name?: string;
  @Prop() disabled?: boolean;
  @Prop() label: string;
  @Prop() checked: boolean;

  render() {
    return (
      <div class="seb-checkbox">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" name={this.name} id={this._id} class="custom-control-input" checked={this.checked} disabled={this.disabled} />

          <label class={{ 'disabled': this.disabled, 'custom-control-label': true }} htmlFor={this._id}>
            {this.label}
          </label>
        </div>
      </div>
    );
  }
}
