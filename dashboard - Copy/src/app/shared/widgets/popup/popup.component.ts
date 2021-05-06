import { Component, OnInit,Input } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";







@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent   implements OnInit {



  card1 =[];

  closeModal: string;
  constructor(private modalService: NgbModal) {}


  ngOnInit(): void {

    // this.card1 = this.SharedServiceService.card1;
  }

  


  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}















// @Component({
//   selector: "ngbd-modal-content",
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button
//         type="button"
//         class="close"
//         aria-label="Close"
//         (click)="activeModal.dismiss('Cross click')"
//       >
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{ name }}!</p>
//     </div>
//     <div class="modal-footer">
//       <button
//         type="button"
//         class="btn btn-outline-dark"
//         (click)="activeModal.close('Close click')"
//       >
//         Close
//       </button>
//     </div>
//   `
// })


// @Component({
//   selector: "ngbd-modal-content",
//   template: `
//       <h4 >Hi there!</h4>

//   `
// })
// export class NgbdModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) {}
// }












// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.scss']
// })
// export class PopupComponent  {

//   constructor(private modalService: NgbModal) {}


//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = "World";
//   }

// }
