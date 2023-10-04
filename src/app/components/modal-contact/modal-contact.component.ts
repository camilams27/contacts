import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { contactsData } from '../contact.model'

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  action!: string;

  @Input()
  purpose!: string;

  @Input()
  contact!: any;

  createContactForm!: FormGroup;
  editContactForm!: FormGroup;
  invalidForm!: boolean;

  contacts: string[] = Object.keys(contactsData);
  data = contactsData;
  
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {}

    ngOnInit() {
      this.createContactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cell: ['', Validators.required],
        telephone: ['', Validators.required],
        favorite: [false],
        status: [true], 
      });

      this.editContactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cell: ['', Validators.required],
        telephone: ['', Validators.required],
        favorite: [false],
        status: [true], 
      });

      if(this.title === 'Editar Contato') {
        const contactEdit: object = {
          name: this.contact.contactName,
          email: this.contact.contactEmail,
          cell: this.contact.contactCell,
          telephone: this.contact.contactPhone,
          favorite: this.contact.isFavorite,
          status: this.contact.isActive,
        };
        this.editContactForm.setValue(contactEdit);
      }
    }

    getErrorMessage(fieldName: string) {
      const field = this.createContactForm.get(fieldName);

      if (field?.hasError('required')) {
        return 'Campo obrigatório!';
      }
  
      return field?.hasError('email') ? 'Email não é válido.' : '';
    }
  
    toggleFavorite() {
      const currentValue = this.createContactForm.get('favorite')?.value;
      this.createContactForm.get('favorite')?.setValue(!currentValue);
    }

    inactiveContact(contact: any) {
      contact.isActive = !contact.isActive;
      this.activeModal.close();
    }
    
    onSubmit() {
      if (this.createContactForm.valid) {
        this.invalidForm = false;
        this.data.push(this.createContactForm.value);
        this.activeModal.close();
      }else if (this.editContactForm.valid) {
        console.log(this.createContactForm.value);
        this.activeModal.close();
      } else {
        this.invalidForm = true;
        console.log('Formulário inválido');
      }
    }
}
