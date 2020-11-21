// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PersonService } from '../../services/person.service';
import { CompanyService } from '../../services/company.service';
// Import Models
import { Person } from '../../domain/test_db/person';
import { Company } from '../../domain/test_db/company';

// START - USED SERVICES
/**
* PersonService.create
*	@description CRUD ACTION create
*
* PersonService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* PersonService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CompanyService.findByContact
*	@description CRUD ACTION findByContact
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Person
 */
@Component({
    selector: 'app-person-edit',
    templateUrl: 'person-edit.component.html',
    styleUrls: ['person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
    item: Person;
    externalCompany_Contact: Company[];
    model: Person;
    formValid: Boolean;

    constructor(
    private personService: PersonService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Person();
        this.externalCompany_Contact = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.personService.get(id).subscribe(item => this.item = item);
                this.companyService.findByContact(id).subscribe(list => this.externalCompany_Contact = list);
            }
            // Get relations
        });
    }


    /**
     * Save Person
     *
     * @param {boolean} formValid Form validity check
     * @param Person item Person to save
     */
    save(formValid: boolean, item: Person): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.personService.update(item).subscribe(data => this.goBack());
            } else {
                this.personService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



