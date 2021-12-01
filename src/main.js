import {RenderPosition, renderTemplate} from './render.js';
import {createMenuTemplate} from './view/menu.js';
import {createFilterTabsTemplate} from './view/filter-tabs.js';
import {createEmptyTripPlaceholderTemplate} from "./view/empty-trip-placeholder.js";

const header = document.querySelector('.page-header');
const menu = header.querySelector('.trip-controls__navigation');
const filters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const events = main.querySelector('.trip-events');

renderTemplate(menu, createMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filters, createFilterTabsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(events, createEmptyTripPlaceholderTemplate(), RenderPosition.BEFOREEND);
