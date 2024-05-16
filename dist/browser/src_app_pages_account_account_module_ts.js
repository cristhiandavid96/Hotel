"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 42707:
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component.html?ngResource */ 43306);
/* harmony import */ var _account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component.scss?ngResource */ 31129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let AccountComponent = class AccountComponent {
    constructor(router) {
        this.router = router;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.links = [
            { name: 'PROFILE', href: 'profile', icon: 'person' },
            { name: 'MY_HOTELS', href: 'my-hotels', icon: 'view_list' },
            { name: 'MY_RESERVATIONS', href: 'reserve', icon: 'favorite' },
            { name: 'REGISTER_HOTEL', href: '/create-hotel', icon: 'add_circle' },
            { name: 'LOGOUT', href: '/login', icon: 'power_settings_new' }
        ];
    }
    ngOnInit() {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
        this.userData = JSON.parse(localStorage.getItem('userData'));
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AccountComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['sidenav',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['window:resize',] }]
};
AccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account',
        template: _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountComponent);



/***/ }),

/***/ 36868:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-input-file */ 89618);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component */ 42707);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 97126);
/* harmony import */ var _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-properties/my-properties.component */ 9692);
/* harmony import */ var _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserve/reserve.component */ 59930);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ 97427);
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-property/edit-property.component */ 61872);













const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent, children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'my-hotels', component: _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__.MyPropertiesComponent },
            { path: 'my-hotels/:id', component: _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__.EditPropertyComponent },
            { path: 'reserve', component: _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__.reserveComponent },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent }
        ]
    }
];
let AccountModule = class AccountModule {
};
AccountModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
            _account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent,
            _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_3__.MyPropertiesComponent,
            _reserve_reserve_component__WEBPACK_IMPORTED_MODULE_4__.reserveComponent,
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent,
            _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_6__.EditPropertyComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_11__.InputFileModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_12__.AgmCoreModule
        ]
    })
], AccountModule);



/***/ }),

/***/ 97126:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 15368);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 57602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 61872:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPropertyComponent": () => (/* binding */ EditPropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-property.component.html?ngResource */ 59127);
/* harmony import */ var _edit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-property.component.scss?ngResource */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);









let EditPropertyComponent = class EditPropertyComponent {
    constructor(appService, activatedRoute, fb, mapsAPILoader, ngZone, snackBar) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.snackBar = snackBar;
        this.features = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.step = 0;
    }
    ngOnInit() {
        this.features = this.appService.getFeatures();
        this.propertyTypes = this.appService.hotelsTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        this.submitForm = this.fb.group({
            basic: this.fb.group({
                title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                desc: null,
                priceDollar: null,
                priceEuro: null,
                propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                propertyStatus: null,
                gallery: null
            }),
            address: this.fb.group({
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                zipCode: '',
                neighborhood: '',
                street: ''
            }),
            additional: this.fb.group({
                bedrooms: '',
                bathrooms: '',
                garages: '',
                area: '',
                yearBuilt: '',
                features: this.buildFeatures()
            }),
            media: this.fb.group({
                videos: this.fb.array([this.createVideo()]),
                plans: this.fb.array([this.createPlan()]),
                additionalFeatures: this.fb.array([this.createFeature()]),
                featured: false
            })
        });
        this.placesAutocomplete();
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params['id']);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            this.property = data;
            this.submitForm.controls.basic.get('title').setValue(this.property.title);
            this.submitForm.controls.basic.get('desc').setValue(this.property.desc);
            // this.submitForm.controls.basic.get('priceDollar').setValue((this.property.priceDollar.sale)?this.property.priceDollar.sale:this.property.priceDollar.rent);
            // this.submitForm.controls.basic.get('priceEuro').setValue((this.property.priceEuro.sale)?this.property.priceEuro.sale:this.property.priceEuro.rent);
            this.submitForm.controls.basic.get('propertyType').setValue(this.propertyTypes.filter(p => p.name == this.property.propertyType)[0]);
            const statusList = [];
            this.propertyStatuses.forEach(status => {
                this.property.propertyStatus.forEach(name => {
                    if (status.name == name) {
                        statusList.push(status);
                    }
                });
            });
            this.submitForm.controls.basic.get('propertyStatus').setValue(statusList);
            const images = [];
            this.property.gallery.forEach(item => {
                let image = {
                    link: item.medium,
                    preview: item.medium
                };
                images.push(image);
            });
            this.submitForm.controls.basic.get('gallery').setValue(images);
            this.submitForm.controls.address.get('location').setValue(this.property.formattedAddress);
            this.lat = this.property.location.lat;
            this.lng = this.property.location.lng;
            this.getAddress();
            this.submitForm.controls.additional.get('bedrooms').setValue(this.property.bedrooms);
            this.submitForm.controls.additional.get('bathrooms').setValue(this.property.bathrooms);
            this.submitForm.controls.additional.get('garages').setValue(this.property.garages);
            this.submitForm.controls.additional.get('area').setValue(this.property.area.value);
            this.submitForm.controls.additional.get('yearBuilt').setValue(this.property.yearBuilt);
            this.features.forEach(feature => {
                this.property.features.forEach(name => {
                    if (feature.name == name) {
                        feature.selected = true;
                    }
                });
            });
            this.submitForm.controls.additional.get('features').setValue(this.features);
            const videos = this.submitForm.controls.media.get('videos');
            while (videos.length) {
                videos.removeAt(0);
            }
            this.property.videos.forEach(video => videos.push(this.fb.group(video)));
            const plans = this.submitForm.controls.media.get('plans');
            while (plans.length) {
                plans.removeAt(0);
            }
            this.property.plans.forEach(plan => {
                let p = {
                    id: plan.id,
                    name: plan.name,
                    desc: plan.desc,
                    area: plan.area.value,
                    rooms: plan.rooms,
                    baths: plan.baths,
                    image: null
                };
                plans.push(this.fb.group(p));
            });
            this.property.plans.forEach((plan, index) => {
                let image = {
                    link: plan.image,
                    preview: plan.image
                };
                this.submitForm.controls.media.get('plans')['controls'][index].controls.image.setValue([image]);
            });
            const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
            while (additionalFeatures.length) {
                additionalFeatures.removeAt(0);
            }
            this.property.additionalFeatures.forEach(feature => additionalFeatures.push(this.fb.group(feature)));
            this.submitForm.controls.media.get('featured').setValue(this.property.featured);
        });
    }
    // -------------------- Address ---------------------------  
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    ;
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            let address = response['results'][0].formatted_address;
            this.submitForm.controls.address.get('location').setValue(address);
            this.setAddresses(response['results'][0]);
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
    }
    setAddresses(result) {
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('street').setValue(null);
        var newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('street').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------  
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        return this.fb.array(arr);
    }
    // -------------------- Media --------------------------- 
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
    setStep(index) {
        this.step = index;
    }
    onSubmitForm(form) {
        if (this.submitForm.get(form).valid) {
            this.nextStep();
            if (form == "media") {
                this.snackBar.open('The property "' + this.property.title + '" has been updated.', '×', {
                    verticalPosition: 'top',
                    duration: 5000
                });
            }
        }
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
EditPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar }
];
EditPropertyComponent.propDecorators = {
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['addressAutocomplete',] }]
};
EditPropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-edit-property',
        template: _edit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPropertyComponent);



/***/ }),

/***/ 9692:
/*!************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPropertiesComponent": () => (/* binding */ MyPropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-properties.component.html?ngResource */ 48417);
/* harmony import */ var _my_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-properties.component.scss?ngResource */ 94898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 85288);








let MyPropertiesComponent = class MyPropertiesComponent {
    constructor(appService) {
        this.appService = appService;
        this.displayedColumns = ['id', 'image', 'title', 'published', 'views', "reservations", 'actions'];
    }
    ngOnInit() {
        this.appService.getProperties().subscribe(res => {
            this.initDataSource(res);
        });
    }
    initDataSource(data) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(property) {
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            const message = this.appService.getTranslateValue('MESSAGE.SURE_DELETE');
            let dialogRef = this.appService.openConfirmDialog(null, message);
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (dialogResult) {
                    this.dataSource.data.splice(index, 1);
                    this.initDataSource(this.dataSource.data);
                }
            });
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
MyPropertiesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
MyPropertiesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, { static: true },] }]
};
MyPropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-properties',
        template: _my_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPropertiesComponent);



/***/ }),

/***/ 97427:
/*!************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 54026);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 42413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);







let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, snackBar) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.infoForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            image: null,
            organization: null,
            facebook: null,
            twitter: null,
            linkedin: null,
            instagram: null,
            website: null
        });
        this.passwordForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        }, { validator: (0,src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.matchingPasswords)('newPassword', 'confirmNewPassword') });
    }
    onInfoFormSubmit(values) {
        if (this.infoForm.valid) {
            this.snackBar.open('Your account information updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
    onPasswordFormSubmit(values) {
        if (this.passwordForm.valid) {
            this.snackBar.open('Your password changed successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 59930:
/*!************************************************************!*\
  !*** ./src/app/pages/account/reserve/reserve.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reserveComponent": () => (/* binding */ reserveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reserve_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reserve.component.html?ngResource */ 19018);
/* harmony import */ var _reserve_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserve.component.scss?ngResource */ 19989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store.service */ 24044);
/* harmony import */ var _theme_components_detail_reservation_detail_reservation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/components/detail-reservation/detail-reservation.component */ 66048);











let reserveComponent = class reserveComponent {
    constructor(appService, dialog, storeService) {
        this.appService = appService;
        this.dialog = dialog;
        this.storeService = storeService;
        this.displayedColumns = ['id', 'reservation_date', 'name_person', 'name_hotel', 'actions'];
    }
    ngOnInit() {
        this.getReservations();
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }
    openDialog(resserve) {
        this.storeService.addReserve(resserve);
        const dialogRef = this.dialog.open(_theme_components_detail_reservation_detail_reservation_component__WEBPACK_IMPORTED_MODULE_4__.DetailReservationComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    getReservations() {
        //console.log('get properties by : ', this.searchFields);  
        this.appService.getReservations().subscribe(data => {
            this.reservations = data;
            this.initDataSource();
        });
    }
    initDataSource() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.reservations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
reserveComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog },
    { type: src_app_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
reserveComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, { static: true },] }]
};
reserveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reserve',
        template: _reserve_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reserve_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], reserveComponent);



/***/ }),

/***/ 31129:
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/account.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57602:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 93683:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".edit-property .sebm-google-map-container {\n  height: 400px;\n}\n.edit-property .step-section {\n  padding: 20px 10px 0;\n  border-radius: 4px;\n  margin: 8px 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6ImVkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1wcm9wZXJ0eSB7IFxuICAgIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9IFxuICAgIC5zdGVwLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDhweCA4cHggMTZweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 94898:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 42413:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 19989:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/reserve/reserve.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 43306:
/*!*****************************************************************!*\
  !*** ./src/app/pages/account/account.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\n    <div class=\"theme-container\">\n\n        <mat-sidenav-container class=\"account\">\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"account-sidenav\">\n                <mat-card [perfectScrollbar]=\"psConfig\"> \n                    <button fxHide=\"false\" fxHide.gt-sm mat-mini-fab color=\"warn\" class=\"close\" (click)=\"sidenav.toggle()\">\n                        <mat-icon>close</mat-icon>\n                    </button>\n                    <mat-card-header fxLayoutAlign=\"start center\">                       \n                        <img mat-card-avatar src=\"assets/images/others/user.jpg\" alt=\"\">\n                        <mat-card-title class=\"text-muted mb-0\">{{userData.name}}</mat-card-title> \n                    </mat-card-header>\n                    <div class=\"divider my-3\"></div>\n                    <div *ngFor=\"let link of links\">\n                        <a matLine [routerLink]=\"link.href\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\n                            <mat-icon class=\"text-muted\">{{link.icon}}</mat-icon>\n                            <span class=\"mx-2\">{{ link.name | translate }} </span>\n                        </a>\n                    </div>                      \n                  </mat-card>  \n            </mat-sidenav>\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\n              <mat-card *ngIf=\"!sidenavOpen\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mb-3\">\n                  <button mat-icon-button (click)=\"sidenav.toggle()\">\n                      <mat-icon>more_vert</mat-icon>\n                  </button>\n                  <h3> My Account</h3>\n              </mat-card>              \n              <mat-card class=\"account-wrapper\">\n                  <router-outlet></router-outlet>\n              </mat-card>  \n            </mat-sidenav-content>\n        </mat-sidenav-container>\n\n    </div>\n</div>";

/***/ }),

/***/ 15368:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  dashboard works!\n</p>\n";

/***/ }),

/***/ 59127:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-accordion [formGroup]=\"submitForm\" class=\"edit-property\">\n\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>    \n    <mat-expansion-panel-header>\n      <mat-panel-title>Basic</mat-panel-title> \n    </mat-expansion-panel-header>\n    <form formGroupName=\"basic\" fxLayout=\"row wrap\">\n\n        <div fxFlex=\"100\" class=\"p-3\">\n          <h1 class=\"fw-500 text-center\">Basic</h1>\n        </div>\n                \n        <div fxFlex=\"100\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Title</mat-label>\n              <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Title is required</mat-error>\n          </mat-form-field>\n        </div>  \n    \n        <div fxFlex=\"100\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Description</mat-label> \n              <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \n          </mat-form-field> \n        </div> \n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Price ($)</mat-label>\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \n          </mat-form-field>\n        </div> \n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Price (€)</mat-label>\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \n          </mat-form-field>\n        </div> \n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Property Type</mat-label> \n              <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\n                  <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\n                      {{propertyType.name}}\n                  </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Property Type is required</mat-error>                               \n          </mat-form-field>\n        </div>\n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Property Status</mat-label>\n              <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" multiple>\n                  <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\n                      {{propertyStatus.name}}\n                  </mat-option>\n              </mat-select>                             \n          </mat-form-field>\n        </div>\n    \n        <div fxFlex=\"100\" class=\"step-section pb-2\">\n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \n            <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \n        </div> \n    \n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('basic')\" type=\"submit\">\n            <span class=\"mx-1 uppercase\">Next</span>                    \n            <mat-icon>navigate_next</mat-icon>\n          </button> \n        </div> \n    \n    </form> \n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle [disabled]=\"!submitForm.get('basic').valid\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>Address</mat-panel-title> \n    </mat-expansion-panel-header>\n    <form formGroupName=\"address\" fxLayout=\"row wrap\">\n            \n        <div fxFlex=\"100\" class=\"p-3\">\n          <h1 class=\"fw-500 text-center\">Address</h1>\n        </div>\n                  \n        <div fxFlex=\"100\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\n              <mat-label>Location</mat-label>\n              <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \n              <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\n                <mat-icon>close</mat-icon>\n              </button>\n              <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">Location is required</mat-error>   \n          </mat-form-field>\n        </div> \n      \n        <div fxFlex=\"100\" class=\"px-2 mb-4\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\n            </agm-map>\n        </div>\n      \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>City</mat-label>\n              <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \n                <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                  {{city.name}}\n                </mat-option>\n              </mat-select> \n              <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \n          </mat-form-field>\n        </div> \n      \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Zip Code</mat-label>\n              <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \n            </mat-form-field>\n        </div>\n      \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Neighborhood</mat-label>\n            <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\n              <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\n                {{neighborhood.name}}\n              </mat-option>\n            </mat-select>   \n          </mat-form-field>\n        </div> \n      \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <mat-label>Street</mat-label>\n            <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple> \n              <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street\">\n                {{street.name}}\n              </mat-option>\n            </mat-select>  \n          </mat-form-field>\n        </div> \n      \n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\n            <mat-icon>navigate_before</mat-icon>\n            <span class=\"mx-1 uppercase\">Back</span>  \n          </button>\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('address')\" type=\"submit\">\n            <span class=\"mx-1 uppercase\">Next</span>                    \n            <mat-icon>navigate_next</mat-icon>\n          </button> \n        </div>  \n      \n    </form>    \n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>Additional</mat-panel-title> \n    </mat-expansion-panel-header>\n    <form formGroupName=\"additional\" fxLayout=\"row wrap\">\n    \n        <div fxFlex=\"100\" class=\"p-3\">\n          <h1 class=\"fw-500 text-center\">Additional</h1>\n        </div>\n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Bedrooms</mat-label>\n              <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \n            </mat-form-field>\n        </div>\n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Bathrooms</mat-label>\n              <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \n            </mat-form-field>\n        </div>\n    \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Garages</mat-label>\n              <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \n            </mat-form-field>\n        </div>\n        \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Area (ft²)</mat-label>\n              <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber>                  \n            </mat-form-field>\n        </div>\n        \n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Year Built</mat-label>\n              <input matInput placeholder=\"Year Built\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  maxlength=\"4\">                  \n            </mat-form-field>\n        </div>\n    \n        <div fxFlex=\"100\" class=\"mb-2\"> \n            <p class=\"uppercase m-2 fw-500\">Features</p> \n            <div formArrayName=\"features\" fxLayout=\"row wrap\">\n                <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\n                    <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \n                </div>\n            </div>\n        </div>\n    \n\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\n            <mat-icon>navigate_before</mat-icon>\n            <span class=\"mx-1 uppercase\">Back</span>  \n          </button>\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('additional')\" type=\"submit\">\n            <span class=\"mx-1 uppercase\">Next</span>                    \n            <mat-icon>navigate_next</mat-icon>\n          </button> \n        </div>  \n    \n        \n    \n    \n    </form>\n  </mat-expansion-panel> \n\n  <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid || !submitForm.get('additional').valid \">\n    <mat-expansion-panel-header>\n      <mat-panel-title>Media</mat-panel-title> \n    </mat-expansion-panel-header>\n    <form formGroupName=\"media\" fxLayout=\"row wrap\">    \n                  \n        <div fxFlex=\"100\" class=\"p-3\">\n          <h1 class=\"fw-500 text-center\">Media</h1>\n        </div>\n    \n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\n                <mat-icon>add_circle</mat-icon>\n            </button>\n        </div> \n        <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n            <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                        <mat-label>Name</mat-label>\n                        <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                        <mat-label>Link</mat-label>\n                        <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \n                    </mat-form-field>                                                 \n                </div>\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>                            \n            </div>        \n        </div>\n    \n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n            <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\n                <mat-icon>add_circle</mat-icon>\n            </button>\n        </div> \n        <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n            <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                        <mat-label>Name</mat-label>\n                        <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                        <mat-label>Desc</mat-label>\n                        <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \n                    </mat-form-field> \n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                        <mat-label>Area (ft²)</mat-label>\n                        <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber>     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                        <mat-label>Rooms</mat-label>\n                        <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber>     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                        <mat-label>Baths</mat-label>\n                        <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber>     \n                    </mat-form-field>\n                    <div fxFlex=\"100\" class=\"px-2\">  \n                        <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \n                    </div>                \n                </div>\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\n                    <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>  \n            </div>        \n        </div> \n    \n        \n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n            <p class=\"mb-0 uppercase fw-500\">Additional features</p>                            \n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\n                <mat-icon>add_circle</mat-icon>\n            </button>\n        </div> \n        <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n            <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                        <mat-label>Name</mat-label>\n                        <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                        <mat-label>Value</mat-label>\n                        <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \n                    </mat-form-field>                                                 \n                </div>\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\n                        <mat-icon>cancel</mat-icon>\n                    </button>\n                </div>                            \n            </div>        \n        </div>    \n    \n        <div fxFlex=\"100\" class=\"py-3\">\n            <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\n        </div>\n\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\n            <mat-icon>navigate_before</mat-icon>\n            <span class=\"mx-1 uppercase\">Back</span>  \n          </button>\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('media')\" type=\"submit\">\n            <span class=\"mx-1 uppercase\">Update</span>\n          </button> \n        </div>\n    \n    </form>\n  </mat-expansion-panel> \n\n</mat-accordion> \n\n<div *ngIf=\"step === 4\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \n  <a routerLink=\"/account/my-properties\" mat-raised-button color=\"accent\">Return to my properties</a>       \n</div> ";

/***/ }),

/***/ 48417:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<mat-form-field appearance=\"outline\" class=\"w-100\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [placeholder]=\"'TEXT_INPUT.FILTER_PROPERTIES' | translate\" autocomplete=\"off\">\n</mat-form-field>\n<div class=\"table-wrapper\"> \n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\n      </ng-container>  \n\n      <!-- Image Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef> {{\"TEXT_INPUT.IMAGE\" | translate}} </th>\n        <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\n      </ng-container> \n  \n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{\"TEXT_INPUT.NAME\" | translate}} </th>\n        <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property.id ]\" class=\"property-name\">{{property.title}}</a></td>\n      </ng-container> \n\n      <!-- Published Column -->\n      <ng-container matColumnDef=\"published\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{\"TEXT_INPUT.PUBLISHED\" | translate}} </th>\n        <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\n      </ng-container> \n\n      <!-- Views Column -->\n      <ng-container matColumnDef=\"views\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{\"TEXT_INPUT.VIEWS\" | translate}}  </th>\n        <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\n      </ng-container> \n\n      <!-- Views Column -->\n      <ng-container matColumnDef=\"reservations\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{\"TEXT_INPUT.RESERVATIONS\" | translate}}  </th>\n        <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\n      </ng-container> \n\n      <!-- Actions Column -->\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> {{\"TEXT_INPUT.ACTIONS\" | translate}}  </th>\n        <td mat-cell *matCellDef=\"let property\">  \n            <a [routerLink]=\"['/account/my-hotels', property.id]\"mat-icon-button color=\"primary\" [matTooltip]=\"'EDIT_PROFILE' | translate\">\n                <mat-icon>edit</mat-icon>\n            </a>\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" [matTooltip]=\"'REMOVE'| translate\" class=\"remove\">\n                <mat-icon>delete</mat-icon>\n            </button> \n        </td>\n      </ng-container> \n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\n      </tr>\n    </table> \n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \n</div>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>";

/***/ }),

/***/ 54026:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Account details</h2>\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\"> \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Name</mat-label>\n                <input matInput placeholder=\"Name\" formControlName=\"name\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.name.errors?.required\">Name is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 3 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Email</mat-label>\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.email.errors?.required\">Email is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Phone</mat-label>\n                <input matInput placeholder=\"Phone\" formControlName=\"phone\" required onlyNumber autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.phone.errors?.required\">Phone is required</mat-error>\n            </mat-form-field>\n\n            <div class=\"mb-3\">\n                <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \n            </div>\n    \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Organization</mat-label>\n                <input matInput placeholder=\"organization\" formControlName=\"organization\" autocomplete=\"off\"> \n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Facebook</mat-label>\n                <input matInput placeholder=\"facebook\" formControlName=\"facebook\" autocomplete=\"off\"> \n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Twitter</mat-label>\n                <input matInput placeholder=\"twitter\" formControlName=\"twitter\" autocomplete=\"off\"> \n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Linkedin</mat-label>\n                <input matInput placeholder=\"linkedin\" formControlName=\"linkedin\" autocomplete=\"off\"> \n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Instagram</mat-label>\n                <input matInput placeholder=\"instagram\" formControlName=\"instagram\" autocomplete=\"off\"> \n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Website</mat-label>\n                <input matInput placeholder=\"website\" formControlName=\"website\" autocomplete=\"off\"> \n            </mat-form-field>\n\n            <div class=\"text-center mt-2\">\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Update profile</button>\n            </div> \n        </form>\n    </div>\n    \n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Password change</h2>\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Current Password</mat-label>\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>New Password</mat-label>\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field> \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Confirm New Password</mat-label>\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required autocomplete=\"off\">\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\n            </mat-form-field>\n            <div class=\"text-center mt-2\">\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Change password</button>\n            </div>\n        </form>\n    </div>\n</div> \n";

/***/ }),

/***/ 19018:
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/reserve/reserve.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<mat-form-field appearance=\"outline\" class=\"w-100\">\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\n</mat-form-field> \n<div class=\"table-wrapper\"> \n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let reserve\"> {{reserve.id}} </td>\n      </ng-container>  \n\n      <!-- Image Column -->\n      <ng-container matColumnDef=\"reservation_date\">\n        <th mat-header-cell *matHeaderCellDef> Fecha de reserva </th>\n        <td mat-cell *matCellDef=\"let reserve\">{{reserve.booking_date}}</td>\n      </ng-container> \n  \n      <!-- Title Column -->\n      <ng-container matColumnDef=\"name_person\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> nombre Persona R. </th>\n        <td mat-cell *matCellDef=\"let reserve\">{{reserve.reserve_person.full_name}}</td>\n      </ng-container>  \n            <!-- Title Column -->\n            <ng-container matColumnDef=\"name_hotel\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> nombre hotel. </th>\n              <td mat-cell *matCellDef=\"let reserve\">{{reserve.id_hotel.title}}</td>\n            </ng-container> \n\n      <!-- Actions Column -->\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Acciones </th>\n        <td mat-cell *matCellDef=\"let reserve\"> \n          <button mat-stroked-button color=\"primary\" mat-button (click)=\"openDialog(reserve)\">Ver detalles</button>\n        </td>\n      </ng-container> \n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\n      </tr>\n    </table> \n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \n</div>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map