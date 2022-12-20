import VehicleSearch from './vehicle-search/index.mjs';

export default class Inventory {
    constructor( ocs ) {
        this.ocs = ocs;

        this.vehicleSearch = new VehicleSearch( ocs );
    }
}