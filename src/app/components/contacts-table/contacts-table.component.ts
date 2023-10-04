import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';
import { contactsData } from '../contact.model';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})

export class ContactsTableComponent implements OnInit {
  @Input()
  data: any;

  favorite!: boolean;
  starIcon!: string;
  toolTipFav!: string

  constructor(private modalService: NgbModal) {}

  displayedColumns: string[] = ['Nome', 'Celular', 'Email', ''];
  dataSource = contactsData;

  ngOnInit(): void {
  }

  viewContact(contact: object) {
    const modalRef = this.modalService.open(ModalContactComponent);
		modalRef.componentInstance.title = 'Detalhes do Contato';
    modalRef.componentInstance.contact = contact;
	}

  editContact(contact: object) {
    const modalRef = this.modalService.open(ModalContactComponent);
		modalRef.componentInstance.title = 'Editar Contato';
    modalRef.componentInstance.contact = contact;
	}

  favoriteContact(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  statusContact(contact: object, action: string) {
    const modalRef = this.modalService.open(ModalContactComponent);
    modalRef.componentInstance.purpose = 'Status';
    if(action === 'active'){ 
      modalRef.componentInstance.title = 'Reativar Contato';
      modalRef.componentInstance.action = 'reativar'; 
    } else if (action === 'inactive') {
      modalRef.componentInstance.title = 'Inativar Contato';
      modalRef.componentInstance.action = 'desativar'; 
    }
    modalRef.componentInstance.contact = contact;
	}

}
