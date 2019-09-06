import { EventEmitter, Output } from '@angular/core';

/**
 * An abstract class for modal.
 */
export abstract class Modal {
  /**
   * An event emitter for when modal is close.
   */
  @Output() closeBtnClick = new EventEmitter();

  /**
   * Emit the close event emitter.
   */
  close() {
    this.closeBtnClick.emit();
  }
}
