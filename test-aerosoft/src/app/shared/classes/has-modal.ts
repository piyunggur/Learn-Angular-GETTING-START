import { OnDestroy, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppInjector } from './../../app.module';

/**
 * Utility class for component with modal.
 */
export class HasModal implements OnDestroy {
  /**
   * Instance of modal service.
   */
  modalService: BsModalService = null;

  /**
   * Modal reference instance.
   */
  modalRef: BsModalRef;

  /**
   * Default class name of modal to open
   */
  modalClass = 'modal-lg';

  /**
   * Open modal.
   * @param template Template Reference for modal.
   * @param options Additional options.
   */
  openModal(template: TemplateRef<any>, options = {}) {
    // Inject modal service if we don't have an instance of it.
    if (!this.modalService) {
      this.modalService = AppInjector.get(BsModalService);
    }

    // Open modal with defaul class.
    this.modalRef = this.modalService.show(template, Object.assign({}, {
      class: this.modalClass,
      ignoreBackdropClick: true
    }, options));
  }

  /**
   * Close opening modal.
   */
  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  /**
   * Automatically closes moddl when companent is destroying.
   */
  ngOnDestroy() {
    this.closeModal();
  }
}
