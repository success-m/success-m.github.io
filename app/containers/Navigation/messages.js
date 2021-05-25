/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.nav';

export default defineMessages({
  link0: {
    id: `${scope}.link0`,
    defaultMessage: '',
    link: '/',
  },
  link1: {
    id: `${scope}.link1`,
    defaultMessage: '',
    link: '/interests',
  },
  link2: {
    id: `${scope}.link2`,
    defaultMessage: '',
    link: '/my-career',
  },
  link3: {
    id: `${scope}.link3`,
    defaultMessage: '',
    link: '/documentation',
  },
});
