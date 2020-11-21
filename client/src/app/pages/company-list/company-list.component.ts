import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CompanyService } from '../../services/company.service';
// Import Models
import { Company } from '../../domain/test_db/company';

// START - USED SERVICES
/**
* CompanyService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CompanyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Company
 * @class CompanyListComponent
 */
@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
    list: Company[];
    search: any = {};
    idSelected: string;
    constructor(
        private companyService: CompanyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.companyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Company to remove
     *
     * @param {string} id Id of the Company to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Company
     */
    deleteItem() {
        this.companyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
