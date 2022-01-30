import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerFormComponent } from "../customer-form/customer-form.component";



describe('CustomersListComponent',() => {
    let fixture: ComponentFixture<CustomerFormComponent>;

    let component: CustomerFormComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations:[CustomerFormComponent],
            imports:[HttpClientTestingModule,RouterTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(CustomerFormComponent);

        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('form invalid when empty',() => {
        expect(component.form.valid).toBeFalse();
    })

    it('fullName field validity',() => {
        let fullName = component.form.controls['fullName'];
        let errors = fullName.errors || {}
        expect(errors['required']).toBeTruthy();
    })

    it('email field validity (required)',() => {
        let fullName = component.form.controls['email'];
        let errors = fullName.errors || {}
        expect(errors['required']).toBeTruthy();
    })

    it('email field validity(email type)',() => {
        component.form.controls['email'].setValue('test');
        let fullName = component.form.controls['email'];
        let errors = fullName.errors || {}
        expect(errors['email']).toBeTruthy();
    })

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });
    
    it('form valid when empty', () => {
    component.form.controls['email'].setValue("test@test.com");
    component.form.controls['fullName'].setValue("truc truc");
    expect(component.form.valid).toBeTruthy();
    });
})