import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PersonService } from '../../services/person.service';
// Import Models
import { Person } from '../../domain/test_db/person';

// START - USED SERVICES
/**
* PersonService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PersonService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Person
 * @class PersonListComponent
 */
@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
    list: Person[];
    search: any = {};
    idSelected: string;
    constructor(
        private personService: PersonService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.personService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Person to remove
     *
     * @param {string} id Id of the Person to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Person
     */
    deleteItem() {
        this.personService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
