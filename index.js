/* eslint-disable no-unused-expressions */
import * as nav from './modules/nav.js';
import BookClass from './modules/bookclass.js';
import * as interact from './modules/interaction.js';
import * as time from './modules/time.js';

nav.displayAdd;
nav.displayLink;
nav.displayContact;

time.getTime();

BookClass.listBooks();
interact.interaction;
