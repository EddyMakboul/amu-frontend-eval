import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvoiceFormComponent } from "../invoice-form/invoice-form.component";



describe('CustomersListComponent',() => {
    let fixture: ComponentFixture<InvoiceFormComponent>;

    let component: InvoiceFormComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations:[InvoiceFormComponent],
            imports:[HttpClientTestingModule,RouterTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(InvoiceFormComponent);

        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty',() => {
        expect(component.form.valid).toBeFalse();
    })

    it('amount field validity',() => {
        let amount = component.form.controls['amount'];
        let errors = amount.errors || {}
        expect(errors['required']).toBeTruthy();
    })

    it('status field validity',() => {
        let status = component.form.controls['status'];
        let errors = status.errors || {}
        expect(errors['required']).toBeTruthy();
    })

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });
    
    it('form valid when empty', () => {
    component.form.controls['amount'].setValue(1000);
    component.form.controls['status'].setValue(true);
    expect(component.form.valid).toBeTruthy();
    });
})