import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-contatos';
  
  constructor(private modalService: NgbModal) {}

  createContact() {
    const modalRef = this.modalService.open(ModalContactComponent);
		modalRef.componentInstance.title = 'Criar Contato';
	}
}
