import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CustomerInvoicesComponent } from "../customer-invoices/customer-invoices.component";



describe('CustomerInvoicesComponent',() => {
    let fixture: ComponentFixture<CustomerInvoicesComponent>;

    let component: CustomerInvoicesComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations:[CustomerInvoicesComponent],
            imports:[RouterModule.forRoot([])]
        }).compileComponents();

        fixture = TestBed.createComponent(CustomerInvoicesComponent);

        component = fixture.componentInstance;
    });

    it('should display each Invoices given on the screnn',() => {

        let MOCK_INVOICES = [
            { id:1, amount: 1000, status: true , id_customer: 1},
            { id:2, amount: 1000, status: false , id_customer: 1}
        ]

        component.invoices = MOCK_INVOICES;

        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(2);
    })
})