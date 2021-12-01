import {RenderPosition, renderTemplate} from './render.js';
import {createNavigationTemplate} from './view/navigation-view.js';
import {createFiltersOfTripTemplate} from './view/filters-of-trip-view.js';
import {createNewTripTemplate} from "./view/new-trip-view";
import {createSortingOfTripsEventsTemplate} from "./view/sorting-of-trip-events-view";

const header = document.querySelector('.page-header');
const navigation = header.querySelector('.trip-controls__navigation');
const filters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const events = main.querySelector('.trip-events');

renderTemplate(navigation, createNavigationTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filters, createFiltersOfTripTemplate(), RenderPosition.BEFOREEND);
renderTemplate(events, createSortingOfTripsEventsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(events, createNewTripTemplate(), RenderPosition.BEFOREEND);
