import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CustomersListComponent } from "../customers-list/customers-list.component"
import { CustomersService } from "../shared/services/customers.service";


describe('CustomersListComponent',() => {
    let fixture: ComponentFixture<CustomersListComponent>;

    let component: CustomersListComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations:[CustomersListComponent],
            imports:[RouterModule.forRoot([])],
            providers:[CustomersService]
        }).compileComponents();

        fixture = TestBed.createComponent(CustomersListComponent);

        component = fixture.componentInstance;
    });

    it('should display each customers given on the screnn',() => {

        let MOCK_CUSTOMERS = [
            { id:1, fullName: "Eddy Makboul", email: "eddy.makboul@icloud.com"},
            { id:2, fullName: "Harry Co", email: "harrycotRouge@icloud.com"}
        ]

        component.customers = MOCK_CUSTOMERS;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('mat-list-option')).length).toBe(2);
    })
})