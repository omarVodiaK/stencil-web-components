import { Component, h, Prop, Host } from '@stencil/core';
import { isString } from '../../utils/utils';

@Component({
  tag: 'seb-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: false,
})
export class Checkbox {
  @Prop() _id?: string;
  @Prop() name?: string;
  @Prop() disabled?: boolean;
  @Prop() label: HTMLElement;
  @Prop() description?: string | HTMLElement;
  @Prop() error?: string | HTMLElement;
  @Prop() checked: boolean;

  render() {
    return (
      <Host>
        <div class="seb-checkbox">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" name={this.name} id={this._id} class="custom-control-input" checked={this.checked} disabled={this.disabled} />
            <label class={{ 'disabled': this.disabled, 'custom-control-label': true }} htmlFor={this._id}>
              {this.label}
            </label>
          </div>
          {isString(this.description) ? <p class="custom-control-description">{this.description}</p> : this.description}
        </div>
        {isString(this.error) ? <span class="text-danger">{this.error}</span> : this.error}
      </Host>
    );
  }
}
