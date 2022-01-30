import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { InvoicesListComponent } from "../invoices-list/invoices-list.component";



describe('CustomerInvoicesComponent',() => {
    let fixture: ComponentFixture<InvoicesListComponent>;

    let component: InvoicesListComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({

            declarations:[InvoicesListComponent],
            imports:[RouterModule.forRoot([])]
        }).compileComponents();

        fixture = TestBed.createComponent(InvoicesListComponent);

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